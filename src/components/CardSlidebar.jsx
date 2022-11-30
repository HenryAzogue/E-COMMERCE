import React, { useEffect } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getCartThunk } from '../store/slices/cart.slice';

const CardSlidebar = ({ show, handleClose }) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartThunk());
  }, []);

  const cart = useSelector((state) => state.cart)

  return (
    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {
          cart.map((product) => (
            <div key={product.id}>
              <p>{product.title}</p>
              <p>{product.price}</p>
            </div>
          ))
        }
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default CardSlidebar;