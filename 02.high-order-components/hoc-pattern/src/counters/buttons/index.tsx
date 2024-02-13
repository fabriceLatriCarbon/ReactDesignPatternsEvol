import React from "react";
import { SharedComponentProps } from "../../hoc/type";




class CounterButton extends React.PureComponent<SharedComponentProps> {
  render() {
    const { sharedState, setSharedState } = this.props;

    console.log('SharedState:', sharedState);

    return (
      <button className='btn btn-primary' onClick={setSharedState}>{sharedState < 2 ? `click: ${sharedState.toString()}` : `clicks: ${sharedState.toString()}`}</button>
    )
  }
}

export default CounterButton;