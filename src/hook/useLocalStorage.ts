import { useEffect, useState } from "react";

export function useLocalStorage(key: any, defaultValue: any) {
    const [value, setValue] = useState(() => JSON.parse(localStorage.getItem(key) || JSON.stringify(defaultValue)));

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}
