import { useDebugValue, useEffect, useState } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(url);

    useEffect(() => {
        const interval = setInterval(() => {
            fetch(url)
                .then(res => res.json())
                .then(data => setData(data))
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, [url]);

    useDebugValue(data);

    return data;
}