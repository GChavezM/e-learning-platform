/** @jest-environment jsdom */

import { render, screen } from '@testing-library/react';
import { LevelBadge } from '@/components/admin/level-badge';

describe('LevelBadge', () => {
  it('renders the level as an accessible image label', () => {
    render(<LevelBadge level={4} />);

    expect(screen.getByRole('img', { name: 'Nivel 4' })).toBeInTheDocument();
    expect(screen.getByText('LVL')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
  });

  it('uses the cyan tier for early levels', () => {
    render(<LevelBadge level={2} />);

    expect(screen.getByRole('img', { name: 'Nivel 2' })).toHaveStyle({
      '--lvl-color': 'var(--primary)',
    });
  });

  it('uses the purple tier for mid levels', () => {
    render(<LevelBadge level={5} />);

    expect(screen.getByRole('img', { name: 'Nivel 5' })).toHaveStyle({
      '--lvl-color': 'var(--lvl-purple)',
    });
  });

  it('uses the gold tier for high levels', () => {
    render(<LevelBadge level={8} />);

    expect(screen.getByRole('img', { name: 'Nivel 8' })).toHaveStyle({
      '--lvl-color': 'var(--xp-gold)',
    });
  });
});
