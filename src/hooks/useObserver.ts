import React, { useEffect, useRef } from "react";

export const useObserver = (ref: React.MutableRefObject<HTMLDivElement | null>, canLoad: boolean, deps: React.DependencyList, callback: () => void) => {

  const observer = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    if (deps[0]) return;
    console.log('observer');
    
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting && canLoad) {
        callback();
      }
    }, {
      threshold: 0.5
    });

    if (ref.current) observer.current.observe(ref.current);

  }, deps)
} 