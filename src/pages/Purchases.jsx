import React, { useEffect } from 'react';
// import { Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPurchasesThunk } from '../store/slices/purchases.slice';

const Purchases = () => {

  const dispatch = useDispatch();
  const purchases = useSelector(state => state.purchases);

  useEffect(() => {
    dispatch(getPurchasesThunk());
  }, []);

  // const newDate = purchases.map((e)=>{
  //   const dd= e.cart.products;
  //   return dd;
  // })
  // const aaDate = newDate.map(e=>{
  //   const aaDD = e.createdAt?.toNumber()
  //   return aaDD;
  // })
  // console.log(aaDate);
  // console.log(aaDate);
  // console.log(purchases);
  // const dateBuy = purchases.cart.productsproduct.createdAt.toDateString();
  //  console.log(purchase)

  return (
    <div className='page__purchases'>

      <header className='purchases_header'>
        <Link
          className='header__link'
          to={"/"}>
          Back to Home:
        </Link>
        <p className='link__title'>Purchases</p>
      </header>

      <h2 className="purchases__subtitle">My Purchases</h2>

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
                    key={product.id}
                  >
                    <p className='date__p'>
                      {product.createdAt}
                    </p>
                    <p className='container__data container__data--brand'>
                      {product.brand}</p>
                    <p className='container__data container__Data--title'>
                      {product.title}</p>
                    <p className='container__data container__data--price'>
                      $ {product.price}</p>
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