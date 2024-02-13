import CounterButton from './counters/buttons';
import CounterSubTitle from './counters/subTitle';
import { SharedComponentProps } from './hoc/type';
import withStore from './hoc/withStore';

import './index.css';

import "bootstrap/dist/css/bootstrap.min.css";

function App(props: SharedComponentProps) {

  console.log('App props.sharedState', props.sharedState);
  return (
    <div className="container h-100">
      <div className='h-100 d-flex flex-column align-items-center justify-content-center'>
        <CounterButton {...props} />
        <CounterSubTitle {...props} />
      </div>
    </div>
  )
}


const Root = withStore(App);
export default Root;
