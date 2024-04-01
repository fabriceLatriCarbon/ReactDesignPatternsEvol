import { Counter } from '@propGetters/containers/Counter';
import RippleEffectButton from '@ui/buttons/RippleEffectButton';
import useCounter from '@propGetters/hooks/useCounter';
import Title from '@ui/headers/Title';

const MAX_COUNT = 10;

export default function PropGettersPage() {
  const { count, getCounterProps, getIncrementProps, getDecrementProps } = useCounter({
    initial: 0,
    max: MAX_COUNT
  });

  const handleBtn1Clicked = () => {
    console.log('btn 1 clicked');
  };

  return (
    <>
      <Title>The Crazy Counter</Title>
      <Counter {...getCounterProps()}>
        <Counter.Decrement icon={'minus'} {...getDecrementProps()} />
        <Counter.Label>Counter</Counter.Label>
        <Counter.Count max={MAX_COUNT} />
        <Counter.Increment icon={'plus'} {...getIncrementProps()} />
      </Counter>
      <div className='mt-[20px]'>
        <RippleEffectButton
          {...getIncrementProps({ onClick: handleBtn1Clicked })}
          className=' border-easternBlue p-2 border-2 text-easternBlue rounded-full  bg-gray-200 dark:bg-ardoise hover:bg-easternBlue hover:text-gray-200'
        >
          Custom increment btn 1
        </RippleEffectButton>
      </div>
      <div className='mt-[20px]'>
        <RippleEffectButton
          className=' border-easternBlue p-2 border-2 text-easternBlue bg-gray-200 dark:bg-ardoise rounded-full hover:bg-easternBlue hover:text-gray-200'
          {...getIncrementProps({ disabled: count > MAX_COUNT - 2 })}
        >
          Custom increment btn 2
        </RippleEffectButton>
      </div>
    </>
  );
}

export { PropGettersPage };
