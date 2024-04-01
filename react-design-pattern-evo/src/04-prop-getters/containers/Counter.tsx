import { Count, Increment, Label } from '@propGetters/components';
import Decrement from '@propGetters/components/Decrement';
import { CounterProvider } from '@propGetters/contexts/useCounterContext';
import { CounterProps } from '@propGetters/types';
import { useRef, useEffect } from 'react';

function Counter({ children, value: count, onChange }: CounterProps) {
  const firstMounded = useRef(true);

  useEffect(() => {
    if (!firstMounded.current) {
      onChange?.(count);
    }
    firstMounded.current = false;
  }, [count, onChange]);

  return (
    <CounterProvider value={{ count }}>
      <div className='inline-flex mt-4'>{children}</div>
    </CounterProvider>
  );
}

Counter.Count = Count;
Counter.Label = Label;
Counter.Increment = Increment;
Counter.Decrement = Decrement;

export { Counter };
