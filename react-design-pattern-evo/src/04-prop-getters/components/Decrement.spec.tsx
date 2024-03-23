import { vi } from 'vitest';
import { render, screen } from '@tests/test-utils';
import Decrement from '@propGetters/components/Decrement';

describe('Decrement Component Suite Tests', () => {
  it('Should render Decrement Component', () => {
    const handleDecrement = vi.fn();
    render(<Decrement onClick={handleDecrement} />);

    const decrementComp = screen.getByTestId('decrement-btn');
    expect(decrementComp).toBeInTheDocument();
  });
});
