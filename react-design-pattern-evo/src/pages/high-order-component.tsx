// HOCComponentPage.tsx

import React from "react";

import { WithCounterProps } from '@hoc/type';
import CounterButton from "@hoc/counters/buttons";
import CounterSubTitle from "@hoc/counters/subTitle";
import Title from "@ui/headers/Title";
import withCounter from "@hoc/HOCs/withCounter";

class HOCComponentPage extends React.PureComponent<WithCounterProps> {
  render() {
    const { props } = this;
    return (
      <>
        <Title>The Counter Button</Title>
        <CounterButton {...props} />
        <CounterSubTitle {...props} />
      </>
    )
  }
}

export default withCounter(HOCComponentPage);
