import React from 'react';
import { SharedComponentProps } from './type';

export default function withStore<P extends object>(
  WrappedComponent: React.ComponentType<P & SharedComponentProps>
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

      this.setSharedState = this.setSharedState.bind(this);
    }

    setSharedState() {
      this.setState((prevState) => {
        const counter = prevState.counter + 1;
        return { counter }
      });

    }

    render() {
      return <WrappedComponent sharedState={this.state.counter} setSharedState={this.setSharedState} {...this.props} />
    }
  };
}
