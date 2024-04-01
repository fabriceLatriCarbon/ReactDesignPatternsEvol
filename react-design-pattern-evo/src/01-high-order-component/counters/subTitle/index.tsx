// CounterSubTitle.tsx

import React from 'react';
import { WithCounterProps } from '@hoc/type';

class CounterSubTitle extends React.PureComponent<WithCounterProps> {
  render() {
    const {
      props: { counter }
    } = this;

    return (
      <p className='text-xl mt-4 text-gray-800 dark:text-gray-200'>
        Je suis un composant utilisant l'état depuis un HOC :
        {counter < 2 ? ` ${counter.toString()} click` : ` ${counter.toString()} clicks`}
      </p>
    );
  }
}

export default CounterSubTitle;
