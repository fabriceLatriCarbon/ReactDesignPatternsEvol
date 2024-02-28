import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from '@fortawesome/free-solid-svg-icons';


import { DecrementProps } from "@propGetters/types";

export default function Decrement({ icon = 'minus', onClick, ...props }: DecrementProps) {
  return (
    <button onClick={onClick} {...props}>
      <FontAwesomeIcon icon={faMinus} />
    </button>)
}
