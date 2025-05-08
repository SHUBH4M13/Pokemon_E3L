import { useState , useEffect } from "react";
import axios from "axios";

export default function useAxiosFetch(url) {

    const [ Loading , setLoading ] = useState(false);
    const [ Data , setData ] = useState(null);
    const [ Error , setError ] = useState(false);

    useEffect( () => {

        if (!url) return; 

        const fetchData = async () => {
            try {
                setLoading(true)
                const res = await axios.get(url)
                setData(res);
                setError(false);
            } catch (error) {
                setError(true);
                setData(null);
           } finally {
                setLoading(false);
           }
        };

        fetchData(); 

    } , [url] )

    return { Data , Loading , Error }

}
