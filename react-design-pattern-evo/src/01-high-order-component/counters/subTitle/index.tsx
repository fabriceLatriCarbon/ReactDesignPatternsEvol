import { WithCounterProps } from '@hoc/type';

const CounterSubTitle: React.FC<WithCounterProps> = ({
  counter,
}: WithCounterProps) => {
  return (
    <p className='text-xl mt-4 text-slate-200'>
      Je suis un composant utilisant l'état depuis un HOC :{' '}
      {counter < 2
        ? `${counter.toString()} click`
        : `${counter.toString()} clicks`}{' '}
    </p>
  );
};

export default CounterSubTitle;
