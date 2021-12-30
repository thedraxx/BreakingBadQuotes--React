import React from 'react';
import '../../App.css'
import { useFetch } from '../Hooks/useFetch';
import { useCounter } from '../03-examples/Hooks/useCounter';
import logo from '../../Assets/load.gif';
import gif1 from '../../Assets/ww.gif';
import bb2 from '../../Assets/bb2.gif';
import bb3 from '../../Assets/bb3.gif';
import bb4 from '../../Assets/bb4.gif';
import bb5 from '../../Assets/bb5.gif';
import bb6 from '../../Assets/bb6.gif';
import bb7 from '../../Assets/bb7.gif';
import bb8 from '../../Assets/bb8.gif';
import bb9 from '../../Assets/bb9.gif';
import bb10 from '../../Assets/bb10.gif';



export const MultipleCustomHooks = () => {

    const { counter,random } = useCounter(1);

    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    
    const Gifs = [gif1,bb2,bb3,bb4,bb5,bb6,bb7,bb8,bb9,bb10];

    let GifsRand = Math.floor(Math.random()*9);

    const { author, quote } = !!data && data[0]; //Si igual a null no hace nada si no es igual a null si


    return (
        <div>
            <h1>Breaking Bad Quotes </h1>

            {
                loading
                    ?
                    (
                        <div className="text-center p-5 ">
                             <div class="loader"></div> 
                        </div>
                    )
                    :
                    (
                        <blockquote className="blockquote text-left">
                            <p className="mb-3 text-center mt-5">{quote}</p>
                            <footer className="blockquote-footer text-black text-center mt-4 "><h5>{author}</h5></footer>
                            <div>
                           
                            <img className="Gifs" src={Gifs[GifsRand]} alt="walter..." /> 
                        
                            </div>
                        </blockquote>
                    )
            }

            <div className="col text-center bg-2 rounded">
                <button className='btn'
                    onClick={random}>
                    Generate 
                </button>
            </div>

        </div>
    )
}
