// CounterButton.tsx

import React from 'react';
import { WithCounterProps } from '@hoc/type';
import LinearGradientButton from '@ui/buttons/LinearGradientButton';

class CounterButton extends React.PureComponent<WithCounterProps> {
  render() {
    const { counter, increment } = this.props;

    return (
      <div className='mt-4'>
        <LinearGradientButton onClick={increment}>
          {counter < 2
            ? `click: ${counter.toString()}`
            : `clicks: ${counter.toString()}`}
        </LinearGradientButton>
      </div>
    );
  }
}

export default CounterButton;
