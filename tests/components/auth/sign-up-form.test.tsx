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

    expect(screen.getByLabelText('Full Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByLabelText('Confirm Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Sign Up' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Login' })).toHaveAttribute('href', '/sign-in');
  });

  it('toggles password and confirm password visibility independently', async () => {
    const user = userEvent.setup();

    render(<SignUpForm />);

    const passwordInput = screen.getByLabelText('Password');
    const confirmPasswordInput = screen.getByLabelText('Confirm Password');
    const toggleButtons = screen.getAllByRole('button', { name: 'Show password' });

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

    await user.type(screen.getByLabelText('Full Name'), 'Ada Lovelace');
    await user.type(screen.getByLabelText('Email'), 'ada@example.com');
    await user.type(screen.getByLabelText('Password'), 'Secure123');
    await user.type(screen.getByLabelText('Confirm Password'), 'Secure124');
    await user.tab();

    expect(await screen.findByRole('alert')).toHaveTextContent('Passwords do not match');
    expect(signUpAction).not.toHaveBeenCalled();
  });

  it('submits valid data and redirects on success', async () => {
    const user = userEvent.setup();
    signUpAction.mockResolvedValue({ success: true });

    render(<SignUpForm />);

    await user.type(screen.getByLabelText('Full Name'), 'Ada Lovelace');
    await user.type(screen.getByLabelText('Email'), 'ada@example.com');
    await user.type(screen.getByLabelText('Password'), 'Secure123');
    await user.type(screen.getByLabelText('Confirm Password'), 'Secure123');
    await user.click(screen.getByRole('button', { name: 'Sign Up' }));

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

    await user.type(screen.getByLabelText('Full Name'), 'Ada Lovelace');
    await user.type(screen.getByLabelText('Email'), 'ada@example.com');
    await user.type(screen.getByLabelText('Password'), 'Secure123');
    await user.type(screen.getByLabelText('Confirm Password'), 'Secure123');
    await user.click(screen.getByRole('button', { name: 'Sign Up' }));

    await waitFor(() => {
      expect(toastError).toHaveBeenCalledWith('Account already exists');
    });

    expect(push).not.toHaveBeenCalled();
  });
});
