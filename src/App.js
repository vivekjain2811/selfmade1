import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  const[value,setvalue]=useState(0);
  function increment(){
setvalue(value+1);
  }
  function decrement(){
    setvalue(value-1);
  }
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] items-center justify-center">
      <div className='flex  justify-center text-2xl'><p> INCREMENT AND DECREMENT</p></div>
      <div className='flex flex-row justify-center  '>
<button   onClick={increment} className='border-r-2 p-4 '>+</button>
<span className='p-4'>{value}</span>
<button onClick={decrement} className='border-l-2 p-4'>-</button>
</div>
       
       
       
        </div>
  );
}

export default App;
