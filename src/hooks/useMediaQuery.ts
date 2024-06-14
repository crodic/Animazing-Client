'use client';
import { useEffect, useState } from 'react';

/**
 * Tailwind Default Breakpoints
 */
export const BREAKPOINTS = {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1280px)',
    '2xl': '(min-width: 1536px)',
};

const useMediaQuery = (query: string): boolean => {
    const [matches, setMatches] = useState(false);
    useEffect(() => {
        const matchQueryList = window.matchMedia(query);
        function handleChange(e: MediaQueryListEvent) {
            setMatches(e.matches);
        }
        matchQueryList.addEventListener('change', handleChange);
        return () => {
            matchQueryList.removeEventListener('change', handleChange);
        };
    }, [query]);
    return matches;
};

export default useMediaQuery;
