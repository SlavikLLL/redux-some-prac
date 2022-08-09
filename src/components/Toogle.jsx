import React,{useState} from 'react'

const Toogle = () => {
    const [toogle,setToogle] = useState(false)
  return (
    <div>
    <div>Toogle</div>
    <button onClick={()=>setToogle(!toogle)}>
        {toogle?"on":"off"}
    </button>
    /</div>
    
  )
}

export default Toogle