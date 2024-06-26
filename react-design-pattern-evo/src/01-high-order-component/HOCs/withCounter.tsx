// withCounter.tsx

import React from 'react';
import { WithCounterProps } from '@hoc/type';

export default function withCounter<P extends object>(
  WrappedComponent: React.ComponentType<P & WithCounterProps>
) {
  return class SharedStateWrapper extends React.Component<
    P,
    { counter: number }
  > {
    constructor(props: P) {
      super(props);
      this.state = {
        counter: 0,
      };

      this.increment = this.increment.bind(this);
    }

    increment() {
      const {
        state: { counter },
      } = this;
      const newCounter = counter + 1;

      this.setState({ counter: newCounter });
    }

    render() {
      const { state: { counter }, props, increment } = this;
      return (
        <WrappedComponent
          counter={counter}
          increment={increment}
          {...props}
        />
      );
    }
  };
}
