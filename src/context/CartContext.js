import { createContext, useState } from 'react';

const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [Cart, setCart] = useState([])
    console.log(Cart)

    const addItem = (productToAdd) => {
        setCart([...Cart, productToAdd])
    }

    const getQuantity = () => {
        let count = 0
        Cart.forEach(prod => {
            count += prod.quantity
        })

        return count
    }
    
    const isInCart = (id) => {
        return Cart.some(prod => prod.id === id )
    }

    const clearCart = () => {
        setCart([])
    }

    const removeItem = (id) => {
        const products = Cart.filter(prod => prod.id !== id)
        setCart(products)
    }

    return(
        <CartContext.Provider value={{
            Cart,
            addItem,
            getQuantity,
            isInCart,
            clearCart,
            removeItem
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext