import { RefObject, useCallback, useRef } from "react";

export const useScrollToHash = (): [RefObject<HTMLDivElement>, () => void] => {
  const ref = useRef<HTMLDivElement>(null);
  const moveTo = useCallback(() => {

    ref?.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, []);
  return [ref, moveTo];
};
