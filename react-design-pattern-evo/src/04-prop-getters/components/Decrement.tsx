import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

import { DecrementProps } from '@propGetters/types';
import { useRef } from 'react';
import { useHover } from '@commonHooks/useHover';

export default function Decrement({ onClick, ...props }: DecrementProps) {
  const ref = useRef<HTMLButtonElement | null>(null);
  const isHover = useHover(ref);

  return (
    <button
      ref={ref}
      onClick={onClick}
      {...props}
      className='rounded-full border-2 w-10 h-10 border-easternBlue hover:bg-easternBlue'
      data-testid='decrement-btn'
    >
      <FontAwesomeIcon icon={faMinus} className={!isHover ? 'text-easternBlue' : 'text-gray-200'} />
    </button>
  );
}
