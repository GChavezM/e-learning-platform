/** @jest-environment jsdom */

import { render, screen } from '@testing-library/react';
import { ProgressBar } from '@/components/admin/progress-bar';

describe('ProgressBar', () => {
  it('renders the provided label and accessible progress values', () => {
    render(<ProgressBar current={125} max={200} label="Mission XP" />);

    const progressbar = screen.getByRole('progressbar', { name: 'Mission XP' });

    expect(progressbar).toHaveAttribute('aria-valuenow', '125');
    expect(progressbar).toHaveAttribute('aria-valuemin', '0');
    expect(progressbar).toHaveAttribute('aria-valuemax', '200');
    expect(screen.getByText('Mission XP')).toBeInTheDocument();
    expect(screen.getByText('125')).toBeInTheDocument();
    expect(screen.getByText(/200 XP/)).toBeInTheDocument();
  });

  it('falls back to the default accessible label when none is provided', () => {
    render(<ProgressBar current={50} max={100} />);

    expect(screen.getByRole('progressbar', { name: 'Progreso de XP' })).toBeInTheDocument();
  });

  it('clamps invalid values instead of rendering a negative or overflowing width', () => {
    const { rerender } = render(<ProgressBar current={150} max={100} label="XP" />);

    const filledBar = document.querySelector('[style*="width: 100%"]');
    expect(filledBar).toBeInTheDocument();

    rerender(<ProgressBar current={-10} max={100} label="XP" />);

    expect(document.querySelector('[style*="width:"]')).toBeNull();
  });

  it('renders no progress fill when the max is zero', () => {
    render(<ProgressBar current={20} max={0} label="XP" />);

    expect(document.querySelector('[style*="width: 0%"]')).not.toBeInTheDocument();
    expect(screen.getByRole('progressbar', { name: 'XP' })).toBeInTheDocument();
  });
});
