import { useSelector, useDispatch } from 'react-redux';
import { getHome } from '../redux/homeSlice';
import { useEffect, useState } from 'react';

const Home = () => {
  const { products } = useSelector((state) => state.products)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHome());
  }, [])

  console.log(products)
  const [slide, setSlide] = useState(0)

  const handelSlide = (images) => {
    return (
      <div className="flex">
        <button onClick={() => slide <= 0 ? setSlide(images.length - 1) : setSlide(slide - 1)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <img src={images[slide]}/>
        <button onClick={() => slide < images.length - 1 ? setSlide(slide + 1) : setSlide(0)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    )
  }
  return (
    <div>
      {
        products.products &&
        <div>
          {
            products.products.map((product, index) => {
              return (
                <div key={product.id}>
                  <div>
                    {handelSlide(product.images)}
                  </div>
                  <p>{product.title}</p>
                  <p>{product.description}</p>
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
