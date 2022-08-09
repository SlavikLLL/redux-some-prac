import React,{useState,useEffect} from 'react'

const Fetch = () => {
    const [items,setItem] = useState([])
    const [isLoaded,setLoaded] = useState(false)
    const [error,setError] = useState(null)
    const delay = ms =>{
        return new Promise(resolve=>{
            setTimeout(() => resolve(),ms);
        })
    }

    useEffect(()=>{
        async function Fetch(){
            await delay(3000);
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(res=>res.json())
            .then(
                (result)=>{
                    setItem(result);
                    setLoaded(true)
                },
                (error)=>{
                    setError(error);
                    setLoaded(true)
                }
            )
        }
        Fetch()
    },[])
    if(!isLoaded){
        return <div>Loading...</div>
        
    }else if(error){
        return <div>{error}</div>
    }else {
        return(
            <ul>
                {items.map(item=>(
                    <li key = {item.id}>
                        {item.name}

                    </li>
                ))}
            </ul>
        )
    }
}

export default Fetch