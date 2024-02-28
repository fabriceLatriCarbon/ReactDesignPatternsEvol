import { useCounterContext } from "@propGetters/contexts/useCounterContext";
import { CountProps } from "@propGetters/types";



export function Count({ max }: CountProps) {
  const { count } = useCounterContext();

  const hasError = max ? count > max : false;

  return <div className={hasError ? 'bg-cardinal text-white py-[5px] px-[7px]' : 'bg-easternBlue text-white py-[5px] px-[7px]'}>{count}</div>
}