import {useEffect, useState} from "react";
import './ItemCount.css';

const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(0)

    useEffect (() =>{
        console.log ('se acaba de montar el componente')
        setTimeout (() =>{
            setCount(10)
        }, 3000)
    }, [])

    useEffect (() =>{
        console.log ('cambio el count')
        
    }, [count])

    const decrement = () => {
        if (count > initial)
        setCount(count -1)
    }

    const increment = () => {
        if (count < stock)
        setCount(count +1)
    }
    return (
       
       <div className="container-count">
           <button onclick={decrement}>-</button>
           <p>{count}</p>
           <button onclick={increment}>+</button>
           <button onClick={()=>onAdd(count)}>Agregar al carrito</button>
       </div>
    )
}


export default ItemCount