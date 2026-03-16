/** @jest-environment jsdom */

import { render, screen } from '@testing-library/react';
import { XPBadge } from '@/components/admin/xp-badge';

describe('XPBadge', () => {
  it('renders the xp value with an accessible status label', () => {
    render(<XPBadge xp={1250} />);

    expect(screen.getByRole('status', { name: '1250 experience points' })).toBeInTheDocument();
    expect(screen.getByText('1,250 XP')).toBeInTheDocument();
  });

  it('applies the size-specific classes for the small badge', () => {
    render(<XPBadge xp={50} size="sm" />);

    expect(screen.getByRole('status')).toHaveClass('text-xs', 'px-2', 'py-0.5');
  });

  it('applies the size-specific classes for the large badge', () => {
    render(<XPBadge xp={5000} size="lg" />);

    expect(screen.getByRole('status')).toHaveClass('text-base', 'px-4', 'py-1.5');
  });
});
