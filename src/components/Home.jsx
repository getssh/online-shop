import { useSelector, useDispatch } from 'react-redux';
import { getHome } from '../redux/homeSlice';
import { useEffect } from 'react';

{/* <div>
<div className="flex">
  <button onClick={() => slide <= 0 ? setSlide(product.images.length - 1) : setSlide(slide - 1)}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
  </button>
  <img src={product.images[slide]}/>
  <button onClick={() => slide < product.images.length - 1 ? setSlide(slide + 1) : setSlide(0)}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  </button>
</div>
</div> */}
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
                    <button className='bg-[#EF6F6C] font-semibold text-white'>View Detail</button>
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
