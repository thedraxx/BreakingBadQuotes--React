import { useState } from "react"

export const useForm = (initialState = {}) => { //Recive el mail,name,password de formCustomHook
    
    const [values, setvalues] = useState(initialState);

        const handleInputChange = ({target}) => {

            setvalues({
                    ...values,
                    [target.name]:  target.value
                });
        }

        return [values, handleInputChange];
} 

