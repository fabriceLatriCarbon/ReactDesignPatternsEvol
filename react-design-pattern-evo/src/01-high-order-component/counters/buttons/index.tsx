import React from "react";
import { SharedComponentProps } from "@hoc/type";
import LinearGradientButton from "@ui/buttons/LinearGradientButton";




class CounterButton extends React.PureComponent<SharedComponentProps> {
  render() {
    const { sharedState, setSharedState } = this.props;

    console.log('SharedState:', sharedState);

    return (
      <div className="mt-4">
        <LinearGradientButton onClick={setSharedState}>{sharedState < 2 ? `click: ${sharedState.toString()}` : `clicks: ${sharedState.toString()}`}</LinearGradientButton>
      </div>
    )
  }
}

export default CounterButton;