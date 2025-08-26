import { createContext, useContext, useState } from "react";

const CartContext = createContext()

export const CartProvider = ({ children }) => {
    
    const [cartArray, setCartArray] = useState([])
    const [isOpen, setIsOpen] = useState(false)

    return (
        <CartContext.Provider value={{isOpen, setIsOpen, cartArray, setCartArray}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)