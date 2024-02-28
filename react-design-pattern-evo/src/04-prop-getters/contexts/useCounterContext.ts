import { CounterContextValue } from '@propGetters/types';
import { createContext, useContext } from 'react';

const CounterContext = createContext<CounterContextValue | undefined>(
  undefined
);

export function useCounterContext(): CounterContextValue | never {
  const counter = useContext(CounterContext);

  if (counter === undefined)
    throw new Error('No value provided for CounterContext');

  return counter;
}

export const CounterProvider = CounterContext.Provider;
