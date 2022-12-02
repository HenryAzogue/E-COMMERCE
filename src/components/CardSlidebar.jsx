import React, { useEffect, useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { checkOutThunk, deleteProductThunk, getCartThunk } from '../store/slices/cart.slice';

const CardSlidebar = ({ show, handleClose }) => {

  const [totalPrice, setTotalPrice] = useState(0);
  const [ newTotal, setNewTotal ] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartThunk());
  }, []);

  const cart = useSelector((state) => state.cart)

  useEffect(() => {
    let total = 0;
    cart.forEach((product) => {
      total += product.price * product.productsInCart.quantity;
    })
    setTotalPrice(total);

    
  }, [cart])
  
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
                  <button
                    className='cart__deleteIcono'
                    onClick={() => dispatch(deleteProductThunk(product.id))}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
                <p className='div__p'>{product.title}</p>
                <div className='cart__footer'>
                  <p className='footer__quantify'>
                    {product.productsInCart.quantity}
                  </p>
                  <p className='footer__p'>
                    <b>Total:</b>
                    {newTotal}

                  </p>
                </div>

              </div>
            ))
          }
        </div>

        <div className='cart__check'>
          <div className="check__header">
            <p className="check__total">Total:</p>
            <p className="check__price">$ {totalPrice}</p>
          </div>
          <button
            className='check__button'
            onClick={() => dispatch(checkOutThunk())}
          >
            Check Out
          </button>
        </div>
      </Offcanvas.Body>

    </Offcanvas>
  );
};

export default CardSlidebar;