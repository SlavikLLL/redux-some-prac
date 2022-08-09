import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { plus,minus,zero, byNumber} from '../redux/count';
import store from '../redux/store';


const CountRedux = () => {
  
    const {count} = useSelector(state=>state.count);
    const dispatch = useDispatch()
  return (
    <div>
        <div >{count}</div>
        <button onClick={()=>dispatch(plus())}>plus</button>
        <button onClick={()=>dispatch(minus())}>minus</button>
        <button onClick={()=>dispatch(zero())}>zero</button>
        <button onClick={()=>dispatch(byNumber(33))}>33</button>
      
    </div>
  )
}

export default CountRedux