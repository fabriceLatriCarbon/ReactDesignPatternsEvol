import CounterButton from '@hoc/counters/buttons';
import CounterSubTitle from '@hoc/counters/subTitle';
import { WithCounterProps } from '@hoc/type';
import withCounter from '@hoc/withCounter';
import Title from '@ui/headers/Title';

function HOCComponent(props: WithCounterProps) {
  return (
    <>
      <Title>The Counter Button</Title>
      <CounterButton {...props} />
      <CounterSubTitle {...props} />
    </>
  );
}

const HOCPage = withCounter(HOCComponent);
export default HOCPage;
