import { useState } from "react";

export const useCounter = (initialState = 10) => {
  
    const [counter, setCounter] = useState(initialState); // 10

    const increment = () =>{
        setCounter(counter + 1);
    }

    const decrement = () =>{
        setCounter(counter - 1);
    }

    const reset = () => {
        setCounter(initialState)
    }
    
    const random = () => {

        setCounter(Math.floor((Math.random() * (11-5))+5));
    }

    return{
        counter,
        increment,
        decrement,
        reset,
        random,
    }

}
