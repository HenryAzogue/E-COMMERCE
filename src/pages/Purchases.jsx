import React, { useEffect } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getPurchasesThunk } from '../store/slices/purchases.slice';

const Purchases = () => {

  const dispatch = useDispatch();
  const purchases = useSelector(state => state.purchases);

  useEffect(() => {
    dispatch(getPurchasesThunk());
  }, []);

  return (
    <div className='page__purchases'>
      <section className='purchases__section'>
        <ul className='section__ul'>
          {
            purchases.map((purchase) => (
              <li
                className='section__li'
                key={purchase.id}>
                {purchase.cart.products.map((product) => (
                  <div
                    className='li__container'
                    key={product.id}>
                    <p className='container__data'>
                      {product.title}</p>
                    <p className='container__data'>
                      {product.price}</p>
                    <p className='container__data'>
                      {product.brand}</p>
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