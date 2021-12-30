import { useEffect, useRef, useState } from "react";

export const useFetch = (url) => {

    const isMounted = useRef(true);
    const [state, setstate] = useState({data:null , loading:true, error:null})

    useEffect(() => {
        return  () => {
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {

        setstate({data:null,loading:true,error:null})
        
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(data => {

                if (isMounted.current) {
                    setstate({
                        loading:false,
                        error:null,
                        data: data,
                    })   
                }
            });

    }, [url])

    return state;

}
