import { RefObject, useState } from 'react';
import { useEventListener } from '@commonHooks/useEventListener';

export function useNavigationDrawer<
  I extends HTMLElement,
  O extends HTMLElement
>(refInner: RefObject<I>, refOuter: RefObject<O>): boolean {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  useEventListener(
    'mouseenter',
    () => {
      setOpenDrawer(() => true);
    },
    refInner
  );
  useEventListener(
    'mouseleave',
    () => {
      setOpenDrawer(() => false);
    },
    refOuter
  );

  return openDrawer;
}
