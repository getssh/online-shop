import { useSelector, useDispatch } from 'react-redux';
import { getHome } from '../redux/homeSlice';
import { useEffect, useState } from 'react';

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
  const { products } = useSelector((state) => state.products)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHome());
  }, [])

  console.log(products)
  return (
    <div>
      {
        products.products &&
        <div className='grid grid-cols-4 gap-4'>
          {
            products.products.map((product, index) => {
              return (
                <div key={product.id}>
                  <img src={product.thumbnail}/>
                  <p>{product.title}</p>
                  <p>{product.description}</p>
                  <p className='text-[#f00]'>-{product.discountPercentage}%</p>
                  <p>${product.price}</p>
                  <p>{product.rating}</p>
                  <p>{product.category}</p>
                </div>
              )
            })
          }
        </div>
      }
      <div>Home</div>
    </div>
  )
}

export default Home;
