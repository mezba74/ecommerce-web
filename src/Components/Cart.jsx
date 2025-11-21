import React from 'react';

const Cart = ({ product }) => {

    return (
        <div>
            <div className='flex flex-col gap-9 my-10 space-x-6'>
                <div>
                    <img className='w-[600px]' src={product.image} alt="" />
                </div>
                <div className='text-center'>
                    <h1 className='text-4xl font-bold text-green-600 my-5'>{product.title}</h1>
                    <p>price:{product.price}</p>
                    <p>category:{product.category}</p>
                    <p>title:{product.title}</p>
                    <p>Quantity:{product.cartQuantity}</p>
                </div>

            </div>
        </div>
    );
};

export default Cart;