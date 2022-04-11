import { useState, useEffect } from "react";
import './ItemCount.css';

const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(0)
 
    useEffect(() => {
        console.log('Se acaba de montar el componente')
        let isActive = true

        setTimeout(() => {
            if(isActive) {
                setCount(10)       
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
        setCount(count - 1)
    }

    const increment = () => {
        setCount(count + 1)
    }

    console.log('Esto esta en el cuerpo del componente')
    return(
        <div>
            <button onClick={decrement}>-</button> 
            <p>{count}</p>
            <button onClick={increment}>+</button>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
} 
/*const ItemCount = ({initial, stock, onAdd}) => {
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
}*/


export default ItemCount