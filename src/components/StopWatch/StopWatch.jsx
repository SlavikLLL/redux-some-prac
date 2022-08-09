import React from 'react'
import { useState } from 'react'
import Buttons from '../Buttons/Buttons'
import DisplayTime from '../DisplayTime/DisplayTime'
import "./StopWatch.css"

const StopWatch = () => {
   const [time,setTime] = useState({m:0,s:0,ms:0});
   const [interv,setInterv] = useState()
   const [status,setStatus] = useState(0)
   let updateM = time.m;
   let updateS = time.s;
   let updateMS = time.ms;
   const start = () =>{
    run()
    setStatus(1)
    setInterv(setInterval(run,10))
   }
   const run = () =>{
    if(updateS === 60) {
        updateM++;
        updateS =0
    }
    if(updateMS === 100){
        updateS++;
        updateMS = 0;
    }
    updateMS++;
    setTime({m:updateM,s:updateS,ms:updateMS})
   }
   const stop = () =>{
    clearInterval(interv);
    setStatus(2)
   }
   const reset = () =>{
    clearInterval(interv);
    setStatus(0);
    setTime({m:0,s:0,ms:0})
   }
   const resume = () => start()
   return (
    <div>
    <DisplayTime time = {time}/>
    <Buttons  status = {status} resume = {resume} reset = {reset} stop = {stop} start = {start}/>
    </div>
   )
  
}

export default StopWatch