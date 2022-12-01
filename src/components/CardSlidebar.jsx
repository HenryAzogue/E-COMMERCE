import React, { useEffect } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { checkOutThunk, getCartThunk } from '../store/slices/cart.slice';

const CardSlidebar = ({ show, handleClose }) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartThunk());
  }, []);

  const cart = useSelector((state) => state.cart)

  return (
    <Offcanvas
      className='cart'
      show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>My Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div>
          {
            cart.map((product) => (
              <div
                className='cart__div'
                key={product.id}
              >
                <div className='div__cart'>
                  <p className='cart__header'>{product.brand}</p>
                  <i className="fa-solid fa-trash"></i>
                </div>
                <p className='div__p'>{product.title}</p>
                <div className='cart__footer'>
                  <p className='footer__quantify'>
                    {/* {product.productsInCart.quantify} */}
                    1
                  </p>
                  <p className='footer__p'>
                    <b>Total: </b>{product.price}</p>
                </div>

              </div>
            ))
          }
        </div>

        <div className='cart__check'>
          <div className="check__header">
            <p className="check__total">Total:</p>
            <p className="check__price">$ ??</p>
          </div>
          <button
            className='check__button'
            onClick={()=>dispatch(checkOutThunk())}
          >
            Check Out
          </button>
        </div>
      </Offcanvas.Body>

    </Offcanvas>
  );
};

export default CardSlidebar;