import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from "react";
import { getProduct } from "../redux/productSlice";

const Product = () => {
  const {product, loading, error} = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const params = useParams();
  
  useEffect(() => {
    dispatch(getProduct(params.id))
  }, [dispatch])

  const [slide, setSlide] = useState(0)
  
  console.log(product.images)
  return (
    <div>
      {loading && <h3>Loading...</h3>}
      {
        product.images &&
        <div>
          <div className="flex justify-center items-center bg-[red] gap-x-2 mt-10">
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
        </div>
      }
    </div>
  )
}

export default Product;
