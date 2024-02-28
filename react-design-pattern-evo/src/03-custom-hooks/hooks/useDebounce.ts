import { useEffect, useRef } from 'react';

const useDebounce = <T extends (...args: Parameters<T>) => ReturnType<T>>(
  callback: T,
  delay: number
) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Cleanup the previous timeout on re-render
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const debouncedCallback = (...args: Parameters<T>) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };

  return debouncedCallback;
};

export default useDebounce;

// import { useEffect } from 'react';

// export default function useDebounce<
//   T extends (...args: Parameters<T>) => ReturnType<T>
// >(callback: T, delay: number): T {
//   useEffect(() => {
//     const handler = setTimeout(() => {
//       callback;
//     }, delay);

//     return () => {
//       clearTimeout(handler);
//     };
//   }, [callback]);

//   return callback;
// }
