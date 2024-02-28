import { useState } from 'react';
import {
  UseCounterParams,
  UseCounterData,
  GetCounterProps,
  GetIncrementProps,
  GetDecrementProps,
} from '@propGetters/types';

//Function which concat all functions together
const callFnsInSequence =
  <F extends (...args: unknown[]) => unknown>(...fns: F[]) =>
  (...args: Parameters<F>) =>
    fns.forEach((fn) => fn && fn(...args));

export default function useCounter({
  initial,
  max,
}: UseCounterParams): UseCounterData {
  const [count, setCount] = useState<number>(initial);

  const handleIncrement = () => {
    setCount((previousCount) => Math.min(previousCount + 1, max));
  };

  const handleDecrement = () => {
    setCount((previousCount) => Math.max(previousCount - 1, 0));
  };

  //props getter for 'Counter'
  const getCounterProps = (otherProps: GetCounterProps | undefined) => ({
    ...(otherProps ?? {}),
    value: count,
    'aria-valuemax': max,
    'aria-valuemin': 0,
    'aria-valuenow': count,
  });

  //props getter for 'Decrement'
  const getDecrementProps = (otherProps: GetDecrementProps | undefined) => ({
    ...(otherProps ?? {}),
    onClick: otherProps?.onClick
      ? callFnsInSequence(handleDecrement, otherProps.onClick)
      : callFnsInSequence(handleDecrement),
    disabled: count === 0,
  });

  //props getter for 'Increment'
  const getIncrementProps = (otherProps: GetIncrementProps | undefined) => ({
    ...(otherProps ?? {}),
    onClick: otherProps?.onClick
      ? callFnsInSequence(handleIncrement, otherProps.onClick)
      : callFnsInSequence(handleIncrement),
    disabled: count === max,
  });

  return {
    count,
    getCounterProps,
    getDecrementProps,
    getIncrementProps,
  };
}
