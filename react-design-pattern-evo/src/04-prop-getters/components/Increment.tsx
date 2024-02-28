import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { IncrementProps } from "@propGetters/types";

export function Increment({ icon = 'plus', onClick, ...props }: IncrementProps) {
  return (
    <button onClick={onClick} {...props}>
      <FontAwesomeIcon icon={faPlus} />
    </button>
  )
}
