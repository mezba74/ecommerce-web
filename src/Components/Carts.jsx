import React, { useContext } from 'react';
import { CartProductUpdate } from './Context/ContextCreator';
import Cart from './Cart';

const Carts = () => {
    const { cartProducts } = useContext(CartProductUpdate)
    console.log(cartProducts)
    return (
        <div>
            <div className='grid grid-cols-3 m-10'>
                {
                    cartProducts.map((product) => <Cart product={product}></Cart>)
                }
            </div>
        </div>
    );
};

export default Carts;