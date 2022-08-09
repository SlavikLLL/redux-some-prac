import React from 'react'
import './DisplayTime.css'

const DisplayTime = (props) => {
  return (
    <div className='time'>
   <span className='block-time'>{(props.time.m >=10)?props.time.m: "0" + props.time.m}</span>
   <span className='block-time'>{(props.time.s >=10)?props.time.s: "0" + props.time.s}</span>
   <span className='block-time'>{(props.time.ms >=10)?props.time.ms: "0" + props.time.ms}</span>
   </div>
  )
}

export default DisplayTime