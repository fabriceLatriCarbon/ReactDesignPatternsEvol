import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { IncrementProps } from '@propGetters/types';
import { useRef } from 'react';
import { useHover } from '@commonHooks/useHover';

export function Increment({ onClick, ...props }: IncrementProps) {
  const ref = useRef<HTMLButtonElement | null>(null);
  const isHover = useHover(ref);
  return (
    <button
      ref={ref}
      onClick={onClick}
      {...props}
      className='rounded-full border-2 w-10 h-10 border-easternBlue hover:bg-easternBlue'
    >
      <FontAwesomeIcon icon={faPlus} className={!isHover ? 'text-easternBlue' : 'text-gray-200'} />
    </button>
  );
}
