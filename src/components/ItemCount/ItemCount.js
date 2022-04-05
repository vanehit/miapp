import { useState } from "react";
import './ItemCount.css';

const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial)

    

    const decrement = () => {
        if (count > initial){
        setCount(count - 1)
        }
    }

    const increment = () => {
        if (count < stock){
        setCount(count + 1)
        }
    }


    return (
       
       <div className="container-count">
           <div class="card">
                <button className="btn" onClick={decrement}>-</button>
                <p>{count}</p>
                <button className="btn" onClick={increment}>+</button>
                <a href="#">
                    <button className="btn" onClick={() => onAdd(count)}>Agregar al Carrito</button>
                </a>
            </div>

        </div>

       
    )
}


export default ItemCount