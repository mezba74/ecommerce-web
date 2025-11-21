import React from 'react';
import { Link, useLoaderData } from 'react-router';

const Products = () => {
    const products = useLoaderData()
    return (
        <div>

            <div>
                <h1 className='my-10 text-center text-4xl font-bold '>Here Is Our Best Picks 🔥</h1>
            </div>
            <div className='grid grid-cols-3'>
                {
                    products.map((product) => <div>
                        <div className="card bg-base-100 w-96 shadow-sm">
                            <figure>
                                <img
                                    src={product.image}
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {product.name}
                                    <div className="badge badge-secondary">NEW</div>
                                </h2>
                                <p>{product.description}</p>
                                <div className="card-actions justify-end w-full">
                                    <div className="badge badge-outline">price:{product.price}</div>
                                    <div className="badge badge-outline">ratings:{product.rating}</div>
                                    <Link to={`/product-details/${product.id}`} className='w-full border rounded-xl bg-green-500 text-center'>Veiw Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default Products;