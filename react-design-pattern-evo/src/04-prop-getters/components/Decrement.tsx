import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from '@fortawesome/free-solid-svg-icons';


import { DecrementProps } from "@propGetters/types";

export default function Decrement({ icon = 'minus', onClick, ...props }: DecrementProps) {
  return (
    <button onClick={onClick} {...props} className='border-easternBlue p-2'>
      <FontAwesomeIcon icon={faMinus} className='text-easternBlue' />
    </button>)
}
