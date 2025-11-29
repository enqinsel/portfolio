import { useEffect, useState, useRef } from 'react';

export const useInView = (options = {}) => {
    const [isInView, setIsInView] = useState(false);
    const [hasBeenInView, setHasBeenInView] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
                if (entry.isIntersecting && !hasBeenInView) {
                    setHasBeenInView(true);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '100px',
                ...options,
            },
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [hasBeenInView, options]);

    return { ref, isInView, hasBeenInView };
};
