import React, { useEffect, useRef } from "react";

export const useObserver = (ref: React.MutableRefObject<HTMLDivElement | null>, canLoad: boolean, [isLoading, ...deps]: React.DependencyList, callback: () => void) => {

  const observer = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    if (isLoading) return;
    console.log(ref.current);
    
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting && canLoad) {
        callback();
      }
    }, {
      threshold: 0.9
    });

    if (ref.current) observer.current.observe(ref.current);

  }, [isLoading, ...deps])
} 