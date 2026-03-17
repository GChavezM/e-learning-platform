/** @jest-environment jsdom */

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignInForm from '@/components/auth/sign-in-form';

const push = jest.fn();
const signInAction = jest.fn();
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
  signInAction: (...args: unknown[]) => signInAction(...args),
}));

describe('SignInForm', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the expected fields and navigation link', () => {
    render(<SignInForm />);

    expect(screen.getByLabelText('Correo electronico')).toBeInTheDocument();
    expect(screen.getByLabelText('Contrasena')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Iniciar sesion' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Crear cuenta nueva' })).toHaveAttribute(
      'href',
      '/sign-up'
    );
  });

  it('toggles the password visibility', async () => {
    const user = userEvent.setup();

    render(<SignInForm />);

    const passwordInput = screen.getByLabelText('Contrasena');
    const toggleButton = screen.getByRole('button', { name: 'Mostrar contrasena' });

    expect(passwordInput).toHaveAttribute('type', 'password');

    await user.click(toggleButton);
    expect(passwordInput).toHaveAttribute('type', 'text');

    await user.click(screen.getByRole('button', { name: 'Ocultar contrasena' }));
    expect(passwordInput).toHaveAttribute('type', 'password');
  });

  it('shows a validation message for an invalid email on blur', async () => {
    const user = userEvent.setup();

    render(<SignInForm />);

    const emailInput = screen.getByLabelText('Correo electronico');
    await user.type(emailInput, 'invalid-email');
    await user.tab();

    expect(await screen.findByRole('alert')).toHaveTextContent(
      'Ingresa una direccion de correo valida'
    );
    expect(signInAction).not.toHaveBeenCalled();
  });

  it('submits valid credentials and redirects on success', async () => {
    const user = userEvent.setup();
    signInAction.mockResolvedValue({ success: true });

    render(<SignInForm />);

    await user.type(screen.getByLabelText('Correo electronico'), 'pilot@example.com');
    await user.type(screen.getByLabelText('Contrasena'), 'Secret123');
    await user.click(screen.getByRole('button', { name: 'Iniciar sesion' }));

    await waitFor(() => {
      expect(signInAction).toHaveBeenCalledWith({
        email: 'pilot@example.com',
        password: 'Secret123',
      });
    });

    expect(push).toHaveBeenCalledWith('/dashboard');
    expect(toastError).not.toHaveBeenCalled();
  });

  it('shows a toast error when the action fails', async () => {
    const user = userEvent.setup();
    signInAction.mockResolvedValue({ error: 'Credenciales invalidas', success: false });

    render(<SignInForm />);

    await user.type(screen.getByLabelText('Correo electronico'), 'pilot@example.com');
    await user.type(screen.getByLabelText('Contrasena'), 'Secret123');
    await user.click(screen.getByRole('button', { name: 'Iniciar sesion' }));

    await waitFor(() => {
      expect(toastError).toHaveBeenCalledWith('Credenciales invalidas');
    });

    expect(push).not.toHaveBeenCalled();
  });
});
