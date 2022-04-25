import { useState, useEffect } from "react";
import './ItemCount.css';

const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(0)
 
    useEffect(() => {
        console.log('Se acaba de montar el componente')
        let isActive = true

        setTimeout(() => {
            if(isActive) {
                setCount(1)       
            }
        }, 3000)

        return (() => {
            isActive = false
            console.log('Esto se ejecuta antes de desmontar el componente')
        })
    })

    useEffect(() => {
        console.log('cambio el count')
    }, [count])


    const decrement = () => {
        if (count > 0){
            setCount(count - 1)
            }
    }

    const increment = () => {
        if (count < stock){
             setCount(count + 1)
         }
    }

  
    return(
        <div>
            <button className="btn__decrement" onClick={decrement}>-</button> 
            <p>{count}</p>
            <button className="btn__increment" onClick={increment}>+</button>
            <button className="btn__Count" onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
} 

export default ItemCount