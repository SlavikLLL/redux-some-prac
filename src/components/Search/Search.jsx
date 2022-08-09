import React,{useState,useEffect} from 'react'
import CardData from "../../Data/CarData"
import './Search.css'

const filterCars = (text,carList) =>{
  if(!text) {
    return carList
  }
  return carList.filter(({car_model})=>
  car_model.toLowerCase().includes(text.toLowerCase())
  );
}
const Search = () => {
  const [carList,setCarList] = useState(CardData);
  const [searchItem,setSearchItem] = useState('')
  useEffect(()=>{
    const debounce = setTimeout(() => {
      const filtered = filterCars(searchItem,CardData)
      setCarList(filtered)
    }, 300);
    return () => clearInterval(debounce)
  },[searchItem])
  return (
    <div >
      <div className='inputStyle'>
      <input 
       value = {searchItem}
       type = "text"
       onChange={(e)=>setSearchItem(e.target.value)}
       />
       </div>
       <div className='listStyle'>
       <ul>
       {carList.map((item,index)=>
       <li key = {index}>{item.car_model}</li>
       )}
       </ul>
       </div>
       

    </div>
  )
}

export default Search