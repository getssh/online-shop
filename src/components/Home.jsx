import { useSelector, useDispatch } from 'react-redux';
import { getHome } from '../redux/homeSlice';
import { useEffect } from 'react';

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
        <div>
          {
            products.products.map((product, index) => {
              return (
                <div key={product.id}>
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
