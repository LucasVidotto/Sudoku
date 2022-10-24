import './inputs.css';
import React, { useContext } from "react";
import Context from "../src/Context/Context";
import TContext from "../src/Context/TContext";
import LifeContext from "../src/Context/LifeContext";

import { useState,useEffect } from 'react'
export default function Inputs(props){
    const [number,setNumber] = useState(0);
    const [number1,setNumber1] = useState();
    const [number2,setNumber2] = useState();
    const [number3,setNumber3] = useState();
    const [number4,setNumber4] = useState(0);
    const [number5,setNumber5] = useState();
    const [number6,setNumber6] = useState();
    const [number7,setNumber7] = useState(0);
    const [number8,setNumber8] = useState();
    const [invalid,setInvalid] = useState(false);
    const [life, setLife] = useContext(Context);
    const [valor, setValor] = useContext(TContext);
    const [ids, setIds] = useContext(LifeContext);
    const [num, setNum] = useState(0);
    const [verify, setVerify] =useState(false);
    function randomNumberInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      useEffect(() => {
        
        setNumber(randomNumberInRange(1, 9));
        setNumber7(randomNumberInRange(1, 9));
        setNumber4(randomNumberInRange(1, 9));

         if(verify == false){
            console.log('rodou 1' )
            if(number == number7|| number == number4 || number4 == number7){
                setVerify(false);
                setNumber(randomNumberInRange(1, 9));
                setNumber7(randomNumberInRange(1, 9));
                setNum(num + 1);
                /* console.log('rodou ' + num)
                console.log(valor); */
                
            }else{
                setVerify(true);
                /* console.log('rodou 3'); */
            }
        }else{
            console.log('end')
        } 
      },[verify == false]);
    function handlerVerify(event){
        if(event.target.value == valor){
            setInvalid(true);
            setLife(life - 1);
        }else{
            handlerOutInput(event);
            /* setNumber(event.target.value) */
        }
    }
    function handlerOutInput(e){
        if(ids == 10 || ids == 11|| ids == 19 ||ids == 20||
             ids == 27 || ids == 30 || ids == 57){
                if(e.target.value == valor){
                    setInvalid(true);
                    setLife(life - 1);
                }else{
                    setInvalid(false);
                     setNumber(e.target.value)
                }
        }
    }
    function verifyInput(event){
        if(event.target.value === number1 || event.target.value == number2 || event.target.value == number3 ||
            event.target.value == number4 || event.target.value == number6 || event.target.value == number5 ||
            event.target.value == number7 || event.target.value == number8){
                setInvalid(true);
                setLife(life - 1);
        }
        else{
            handlerVerify(event);
            /* setNumber(event.target.value) */
        }
    }
    function eventHandler(e){
        setIds(e.target.id);
        console.log('id : '+ids);
    }
    return(
        <>
        
        {invalid == true ? 
        <input 
        className="error" 
        type="text" 
        id={props.id} 
        value={number} 
        onChange={(e)=> { verifyInput(e);  }}/>
        :
        <input 
        type="text" 
        id={props.id} 
        value={number} 
        onChange={(e)=> { verifyInput(e); handlerVerify(e);}}/>
        }
        
        <input 
            type="text" 
            id={props.id + 1} 
            value={number1} 
            onChange={(e)=> 
                {setNumber1(e.target.value) ; 
                setValor(e.target.value);
                eventHandler(e);
            }}
        />
        <input 
            type="text" 
            id={props.id + 2} 
            value={number2}
            onChange={(e)=> {setNumber2(e.target.value);setValor(e.target.value)}}/>
        <input 
        type="text" 
        id={props.id + 3} 
        value={number3}
        onChange={(e)=> 
        {setNumber3(e.target.value);eventHandler(e); setValor(e.target.value)}}/>
        <input type="text" id={props.id + 4} value={number4}onChange={(e)=> setNumber4(e.target.value)}/>
        <input type="text" id={props.id + 5} value={number5}onChange={(e)=> setNumber5(e.target.value)}/>
        <input type="text" id={props.id + 6} value={number6}onChange={(e)=> setNumber6(e.target.value)}/>
        <input type="text" id={props.id + 7} value={number7}onChange={(e)=> setNumber7(e.target.value)}/>
        <input type="text" id={props.id + 8} value={number8}onChange={(e)=> setNumber8(e.target.value)}/>
        </>
    )
}