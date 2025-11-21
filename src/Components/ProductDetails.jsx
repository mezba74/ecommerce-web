import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router';
import { CartProductUpdate } from './Context/ContextCreator';
import Swal from 'sweetalert2';

const ProductDetails = () => {
    const product = useLoaderData()
    const { HandleCartUpdate } = useContext(CartProductUpdate)
    return (
        <div>
            <div className='flex gap-9 my-10'>
                <div>
                    <img className='w-[600px]' src={product.image} alt="" />
                </div>
                <div className='text-center'>
                    <h1 className='text-4xl font-bold text-green-600 my-5'>{product.title}</h1>
                    <p>price:{product.price}</p>
                    <p>category:{product.category}</p>
                    <p>title:{product.title}</p>
                    <div className='flex gap-5 items-center justify-center mt-7'>
                        <Link onClick={() => {
                            HandleCartUpdate(product)
                            Swal.fire({
                                title: 'success',
                                text: `${product.title}added successfully`,
                            })
                        }} to='/carts' className='btn btn-primary '> Add To Cart</Link>
                        <Link to='/order' className='btn btn-secondary'> Buy Now</Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProductDetails;