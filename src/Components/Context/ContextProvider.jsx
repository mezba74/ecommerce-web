import React, { useState } from 'react';
import { CartProductUpdate } from './ContextCreator';

const ContextProvider = ({ children }) => {
    const [cartProducts, setCartProduct] = useState([])
    const HandleCartUpdate = (product) => {
        setCartProduct(prev => {
            const exist = prev.some((elem) => elem.id === product.id)
            if (exist) {
                return prev.map((elem) => elem.id === product.id ? { ...elem, cartQuantity: (elem.cartQuantity + 1 || 0) } : elem)

            }
            else {

                return [...prev, { ...product, cartQuantity: 1 }]
            }
        })
    }
    const obj = {
        HandleCartUpdate,
        cartProducts,
        setCartProduct

    }
    return (

        <CartProductUpdate value={obj}>
            {children}
        </CartProductUpdate>
    );
};

export default ContextProvider;