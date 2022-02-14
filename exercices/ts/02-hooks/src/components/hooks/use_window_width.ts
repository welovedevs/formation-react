import { useEffect, useState } from 'react';

export const useWindowWidth = () => {
    const [width, setWidth] = useState(0);
    useEffect(() => {
        const handler = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener('resize', handler);
        handler();
        return () => {
            window.removeEventListener('resize', handler);
            // appliqué lors du démontage du componsant
        };
    }, []);

    return { width };
};
