
import './App.css'
import Inputs from './Inputs';
import React, { useState, useEffect } from 'react';
import Context from './Context/Context';
import Counter from './Context/Counter';
import { FaHeartBroken, FaHeart } from "react-icons/fa";
import TContext from './Context/TContext';
import LifeContext from './Context/LifeContext';


function App() {
  const [total, setTotal] = useState(3);
  const [valor, setValor] = useState();
  const [ids, setIds] = useState(-1);
  useEffect(() => {
    if(total < 0){
      setTotal(total + 1);
    }
    
    },[total]);

  
  return (
    < Context.Provider value={[total, setTotal]} >
      <TContext.Provider value={[valor,setValor]} >
      <LifeContext.Provider value={[ids,setIds]} >
        <span>Life  {total > 0 ? 
        <span><FaHeart /> </span>:
        <span> <FaHeartBroken /> </span>}
        : {total}</span>
        
        {total == 0 ? 
        <p>Game Over</p> : <p></p>}
        <h5>{valor}</h5>
        <h5>{ids}</h5>
        <div className="App">
          <div className='inputs-change'>
            <Inputs id={0}/>
          </div>
          <div className='inputs-change'><Inputs id={9}/></div>
          <div className='inputs-change'><Inputs id={18}/></div>
          <div className='inputs-change'><Inputs id={27}/></div>
          <div className='inputs-change'><Inputs id={36}/></div>
          <div className='inputs-change'><Inputs id={45}/></div>
          <div className='inputs-change'><Inputs id={54}/></div>
          <div className='inputs-change'><Inputs id={63}/></div>
          <div className='inputs-change'><Inputs id={72}/></div>
        </div>
    </LifeContext.Provider>
    </TContext.Provider>
    </Context.Provider > 
  )
}

export default App
