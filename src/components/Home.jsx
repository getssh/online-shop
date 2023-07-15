import { useSelector, useDispatch } from 'react-redux';
import { getHome } from '../redux/homeSlice';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const { products, loading } = useSelector((state) => state.products)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHome());
  }, [])

  console.log(products)
  return (
    <div className='m-6 px-10 text-[#4E4C67]' >
      {
        loading &&
        <div>Loading...</div>
      }
      {
        products.products &&
        <div className='grid grid md:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            products.products.map((product) => {
              return (
                <div key={product.id} className='h-fit bg-[#EAFFFD] p-2 drop-shadow-md'>
                  <div className='h-52 overflow-hidden'>
                    <img src={product.thumbnail}/>
                  </div>
                  <div>
                    <p className='font-bold text-ellipsis overflow-hidden h-14'>{product.title}</p>
                    <p className='text-ellipsis overflow-hidden h-20'>{product.description}</p>
                    <p className='text-[#f00]'>{product.discountPercentage}% off</p>
                    <p>${product.price}</p>
                    <p>Rating: {product.rating}/5</p>
                    <p>{product.category}</p>
                  </div>
                  <div className='flex justify-around sm:flex-wrap sm:gap-y-1'>
                    <Link to={`/${product.id}`}>
                      <button className='bg-[#EF6F6C] font-semibold text-white'>View Detail</button>
                    </Link>
                    <button className='bg-[#12355B] font-semibold text-white'>Add to Cart</button>
                  </div>
                </div>
              )
            })
          }
        </div>
      }
    </div>
  )
}

export default Home;
