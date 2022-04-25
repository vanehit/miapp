import { useContext } from "react"
import CartContext from "../../context/CartContext"

const ItemCart = () => {

    const { Cart, removeItem } = useContext(CartContext)

    if(Cart.length === 0) {
        return (
            <h1>No hay productos</h1>
        )
    }

    return (
        <>
        <h1>Cart</h1>
        <ul>
            {
                Cart.map(prod => <li key={prod.id}>{prod.name}  cantidad: {prod.quantity} precio uni: {prod.price}  subtotal: {prod.quantity * prod.price} <button onClick={() => removeItem(prod.id)}>X</button></li>)
            }   
        </ul>
        </>
    )
}

export default ItemCart