import {useEffect, useState} from "react";
import './ItemCount.css';

const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial)

    

    const decrement = () => {
        if (count < stock){
        setCount(count +1)
        }
    }

    const increment = () => {
        if (count > initial){
        setCount(count -1)
        }
    }


    return (
       
       <div className="container-count">
           <button onclick={decrement}>-</button>
           <p>{count}</p>
           <button onclick={increment}>+</button>
           <button onclick={() => onAdd(count)}>Agregar al Carrito</button>
           
       </div>
    )
}


export default ItemCount