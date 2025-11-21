
import { useLoaderData } from 'react-router';
import ProductCard from './ProductCard'
import { CartProductUpdate } from './Context/ContextCreator';

const Home = () => {
    const products = useLoaderData()
    const populerProduct = products.filter((product) => product.isPopular)
    // const { name, description, price, quantity, image } = product
    return (

        <div>

            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src="data:image/jpeg;base64,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"
                        className="max-w-sm rounded-lg shadow-2xl h-100 object-cover"
                    />
                    <div>
                        <h1 className="text-5xl font-bold">Demo Ecommerce</h1>
                        <p className="py-6">
                            Discover the latest products at the best prices,Shop effortlessly and enjoy a seamless <br />
                            experiance. Shop Smart.Live Better
                        </p>
                    </div>
                </div>
            </div>

            <div>
                <h1 className='text-center text-4xl font-bold my-7'>Here Is Our Top Picks 🔥</h1>
            </div>
            <div className='grid grid-cols-3 ml-20'>
                {
                    populerProduct.map((product) => <ProductCard product={product} key={product.id}></ProductCard>)
                }

            </div>





        </div>
    );
};

export default Home;