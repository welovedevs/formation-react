import { useEffect, useState } from 'react';

export const useWindowWidth = () => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const handler = () => {
            console.log("resize")
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handler);
        handler();
        return () => window.removeEventListener('resize', handler);
    }, []);

    return { width };
};
