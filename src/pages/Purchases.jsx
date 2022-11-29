import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPurchasesThunk } from '../store/slices/purchases.slice';

const Purchases = () => {

  const dispatch = useDispatch();
  const purchases = useSelector(state => state.purchases);
  // const carts = useSelector(state => state.purchases.cart);
  // console.log(purchases);

  useEffect(() => {
    dispatch(getPurchasesThunk());
  }, []);

  return (
    <div>
      <section className='purchases'>
        <ul>
          {
            purchases.map((purchase) => (
              <li key={purchase.id}>
                {purchase.cart.products.map((product)=>(
                  <div key={product.id}>
                    <p>{product.title}</p>
                    <p>{product.price}</p>
                    <p>{product.brand}</p>
                  </div>
                ))}
             
              </li>
            ))
          }
        </ul>
      </section>
    </div>
  );
};

export default Purchases;