import CounterButton from "@hoc/counters/buttons";
import CounterSubTitle from "@hoc/counters/subTitle";
import { SharedComponentProps } from "@hoc/type";
import withStore from "@hoc/withStore";
import Title from "@ui/headers/Title";



function HOCComponent(props: SharedComponentProps) {

  return (
    <>
      <Title>The Counter Button</Title>
      <CounterButton {...props} />
      <CounterSubTitle {...props} />
    </>
  )
}


const HOCPage = withStore(HOCComponent);
export default HOCPage;
