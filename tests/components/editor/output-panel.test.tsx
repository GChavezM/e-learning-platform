/** @jest-environment jsdom */

import { render, screen } from '@testing-library/react';
import OutputPanel from '@/components/editor/output-panel';

describe('OutputPanel', () => {
  it('renders the idle placeholder when no output has been produced', () => {
    render(
      <OutputPanel
        output={null}
        error={null}
        isLoading={false}
        isCorrect={null}
        isTestFailure={false}
      />
    );

    expect(screen.getByLabelText('Salida de ejecucion de Python')).toBeInTheDocument();
    expect(screen.getByText('La salida aparecera aqui...')).toBeInTheDocument();
  });

  it('shows the loading state while code is running', () => {
    render(
      <OutputPanel
        output={null}
        error={null}
        isLoading={true}
        isCorrect={null}
        isTestFailure={false}
      />
    );

    expect(screen.getByText('Ejecutando codigo')).toBeInTheDocument();
  });

  it('shows the success banner when execution is correct', () => {
    render(
      <OutputPanel
        output={'hello mission'}
        error={null}
        isLoading={false}
        isCorrect={true}
        isTestFailure={false}
      />
    );

    expect(screen.getByText('✅ Objetivo de misión completado')).toBeInTheDocument();
    expect(screen.getByText('hello mission')).toBeInTheDocument();
  });

  it('renders a dedicated test failure state with stdout', () => {
    render(
      <OutputPanel
        output={'actual output'}
        error={'Expected 4 but got 5'}
        isLoading={false}
        isCorrect={false}
        isTestFailure={true}
      />
    );

    expect(screen.getByText('⚠️ Prueba fallida')).toBeInTheDocument();
    expect(screen.getByText('Expected 4 but got 5')).toBeInTheDocument();
    expect(screen.getByText('stdout')).toBeInTheDocument();
    expect(screen.getByText('actual output')).toBeInTheDocument();
  });

  it('renders the generic error state when execution fails outside tests', () => {
    render(
      <OutputPanel
        output={null}
        error={'SyntaxError'}
        isLoading={false}
        isCorrect={false}
        isTestFailure={false}
      />
    );

    expect(screen.getByText('❌ Error detectado')).toBeInTheDocument();
    expect(screen.getByText('SyntaxError')).toBeInTheDocument();
  });
});
