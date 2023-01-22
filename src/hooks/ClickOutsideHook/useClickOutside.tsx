import { useEffect, useRef } from 'react';

type Callback = (event: MouseEvent) => void;

function useClickOutside(callback: Callback) {
    const ref = useRef<HTMLDivElement>(null);

    const handleClick = (event: MouseEvent) => {
        if (
            ref.current
            && !ref.current.contains(event.target as Node)
            ) {
            callback(event);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClick, true);

        return () => {
            document.removeEventListener('click', handleClick, true);
        };
    }, []);

    return ref;
}

export default useClickOutside;
