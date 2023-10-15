import { useState, useEffect } from 'react';

type BlogData = {
    titleTop: string;
    bodyTop: string;
    titleSecond: string;
    bodySecond: string;
    titleThird: string;
    bodyThird: string;
    shopInfo: string;
    imageTop: File | null;
    imageSecond: File | null;
    imageThird: File | null;
    author: string;
    id: number;
};

const useFetch = (url: string) => {
    const [data, setData] = useState<BlogData[]>([]);
    const [isPending, setIsPending] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
            .then(res => {
                if(!res.ok)
                {
                    throw Error('Could not fetch data for that resource');
                }
                return res.json();
            })
            .then((data: BlogData[]) => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch((err: Error) => {
                if(err.name==='AbortError') {
                    console.log('Fetch aborted');
                }
                else {
                    const errorObject = new Error(err.message);
                    setError(errorObject);
                    setIsPending(false);
                }
            })
        }, 5);

        return () => abortCont.abort();
    },[url]);

    return {data, isPending, error};
}

export default useFetch;