import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPurchasesThunk } from '../store/slices/purchases.slice';

const Purchases = () => {

  const dispatch = useDispatch();
  const purchases = useSelector(state => state.purchases);
  const carts = useSelector(state => state.purchases.cart);
  console.log(purchases);

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
                {purchase.cart(map(carts)=>(
                  
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