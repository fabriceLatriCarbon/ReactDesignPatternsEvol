import { Counter } from "@propGetters/containers/Counter";
import useCounter from "@propGetters/hooks/useCounter";


const MAX_COUNT = 10;

export default function PropGettersPage() {
  const {
    count,
    getCounterProps,
    getIncrementProps,
    getDecrementProps
  } = useCounter({
    initial: 0,
    max: MAX_COUNT
  });

  const handleBtn1Clicked = () => {
    console.log("btn 1 clicked");
  };

  return (
    <>
      <Counter {...getCounterProps()}>
        <Counter.Decrement icon={"minus"} {...getDecrementProps()} />
        <Counter.Label>Counter</Counter.Label>
        <Counter.Count max={MAX_COUNT} />
        <Counter.Increment icon={"plus"} {...getIncrementProps()} />
      </Counter>
      <div className="mt-[20px]">
        <button {...getIncrementProps({ onClick: handleBtn1Clicked })}>
          Custom increment btn 1
        </button>
      </div>
      <div className="mt-[20px]">
        <button {...getIncrementProps({ disabled: count > MAX_COUNT - 2 })}>
          Custom increment btn 2
        </button>
      </div>
    </>
  );
}

export { PropGettersPage };