/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useEffect, useState } from 'react';

const useDebounce = <T>(value: T, delay = 500) => {
    const [debounceValue, setDebounceValue] = useState(value);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebounceValue(value);
        }, delay);

        return () => clearTimeout(timeout);
    }, [value]);
    return debounceValue;
};

export default useDebounce;
