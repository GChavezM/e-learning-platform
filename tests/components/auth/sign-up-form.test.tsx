/** @jest-environment jsdom */

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignUpForm from '@/components/auth/sign-up-form';

const push = jest.fn();
const signUpAction = jest.fn();
const toastError = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({ push }),
}));

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href, ...props }: React.ComponentProps<'a'>) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

jest.mock('sonner', () => ({
  toast: {
    error: (...args: unknown[]) => toastError(...args),
  },
}));

jest.mock('@/modules/auth/actions', () => ({
  signUpAction: (...args: unknown[]) => signUpAction(...args),
}));

describe('SignUpForm', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the expected fields and login link', () => {
    render(<SignUpForm />);

    expect(screen.getByLabelText('Nombre completo')).toBeInTheDocument();
    expect(screen.getByLabelText('Correo electronico')).toBeInTheDocument();
    expect(screen.getByLabelText('Contrasena')).toBeInTheDocument();
    expect(screen.getByLabelText('Confirmar contrasena')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Registrarse' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Iniciar sesion' })).toHaveAttribute(
      'href',
      '/sign-in'
    );
  });

  it('toggles password and confirm password visibility independently', async () => {
    const user = userEvent.setup();

    render(<SignUpForm />);

    const passwordInput = screen.getByLabelText('Contrasena');
    const confirmPasswordInput = screen.getByLabelText('Confirmar contrasena');
    const toggleButtons = screen.getAllByRole('button', { name: 'Mostrar contrasena' });

    expect(passwordInput).toHaveAttribute('type', 'password');
    expect(confirmPasswordInput).toHaveAttribute('type', 'password');

    await user.click(toggleButtons[0]);
    expect(passwordInput).toHaveAttribute('type', 'text');
    expect(confirmPasswordInput).toHaveAttribute('type', 'password');

    await user.click(toggleButtons[1]);
    expect(confirmPasswordInput).toHaveAttribute('type', 'text');
  });

  it('shows a validation message when the passwords do not match', async () => {
    const user = userEvent.setup();

    render(<SignUpForm />);

    await user.type(screen.getByLabelText('Nombre completo'), 'Ada Lovelace');
    await user.type(screen.getByLabelText('Correo electronico'), 'ada@example.com');
    await user.type(screen.getByLabelText('Contrasena'), 'Secure123');
    await user.type(screen.getByLabelText('Confirmar contrasena'), 'Secure124');
    await user.tab();

    expect(await screen.findByRole('alert')).toHaveTextContent('Las contrasenas no coinciden');
    expect(signUpAction).not.toHaveBeenCalled();
  });

  it('submits valid data and redirects on success', async () => {
    const user = userEvent.setup();
    signUpAction.mockResolvedValue({ success: true });

    render(<SignUpForm />);

    await user.type(screen.getByLabelText('Nombre completo'), 'Ada Lovelace');
    await user.type(screen.getByLabelText('Correo electronico'), 'ada@example.com');
    await user.type(screen.getByLabelText('Contrasena'), 'Secure123');
    await user.type(screen.getByLabelText('Confirmar contrasena'), 'Secure123');
    await user.click(screen.getByRole('button', { name: 'Registrarse' }));

    await waitFor(() => {
      expect(signUpAction).toHaveBeenCalledWith({
        confirmPassword: 'Secure123',
        email: 'ada@example.com',
        name: 'Ada Lovelace',
        password: 'Secure123',
      });
    });

    expect(push).toHaveBeenCalledWith('/dashboard');
    expect(toastError).not.toHaveBeenCalled();
  });

  it('shows a toast error when the action fails', async () => {
    const user = userEvent.setup();
    signUpAction.mockResolvedValue({ error: 'Account already exists', success: false });

    render(<SignUpForm />);

    await user.type(screen.getByLabelText('Nombre completo'), 'Ada Lovelace');
    await user.type(screen.getByLabelText('Correo electronico'), 'ada@example.com');
    await user.type(screen.getByLabelText('Contrasena'), 'Secure123');
    await user.type(screen.getByLabelText('Confirmar contrasena'), 'Secure123');
    await user.click(screen.getByRole('button', { name: 'Registrarse' }));

    await waitFor(() => {
      expect(toastError).toHaveBeenCalledWith('Account already exists');
    });

    expect(push).not.toHaveBeenCalled();
  });
});
