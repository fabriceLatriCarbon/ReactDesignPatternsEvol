import { render, screen } from '@tests/test-utils';
import { Count } from '@propGetters/components/Count';
import { CounterProvider } from '@propGetters/contexts/useCounterContext';

describe('Count Component Suite Tests', () => {
  it('Should render Count component', () => {
    render(
      <CounterProvider value={{ count: 0 }}>
        <Count max={10} />
      </CounterProvider>
    );

    const countComp = screen.getByTestId('count-component');
    expect(countComp).toBeInTheDocument();
  });
});
