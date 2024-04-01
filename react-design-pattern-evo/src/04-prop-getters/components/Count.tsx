import { useCounterContext } from '@propGetters/contexts/useCounterContext';
import { CountProps } from '@propGetters/types';

export function Count({ max }: CountProps) {
  const { count } = useCounterContext();

  const hasError = count && count > max;

  return (
    <div
      data-testid='count-component'
      className={
        hasError
          ? 'bg-cardinal text-white py-[5px] px-[7px]'
          : 'text-gray-700 dark:text-white dark:bg-ardoise py-[5px] px-[7px]'
      }
    >
      {count}
    </div>
  );
}
