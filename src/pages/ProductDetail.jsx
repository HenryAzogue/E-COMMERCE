import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { set } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { addProductThunk } from '../store/slices/cart.slice';
import { getProductsThunk } from '../store/slices/product.slice';

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [rates, setRates] = useState(1);

  useEffect(() => {
    dispatch(getProductsThunk());
  }, []);

  useEffect(()=>{
    window.scrollTo(0,0);
  },[id])

  const productList = useSelector((state) => state.products)

  const productInfo = productList.find((productData) => productData.id === Number(id));
  const relateProduct = productList.filter(
    (prodcutItem) => prodcutItem.category.id === productInfo.category.id
  );

  const addToCart = () => {
    const addProduct = {
      id: productInfo.id,
      quantity: rates
    }
    dispatch(addProductThunk(addProduct));
  }

  return (
    <div className='detail'>
      <section className='detail__section'>
        <Carousel
          className="section__carousel"
          pause="hover"
          variant="dark"
          interval={6000}
        >
          {productInfo?.productImgs.map((image) => (
            <Carousel.Item key={image}>
              <img src={image} height="350px" />
            </Carousel.Item>
          ))}
        </Carousel>

        <div className="section__info">
          <h1 className='info__title'>{productInfo?.title}</h1>
          <div className="info__data">
            <p className='data'>From: $ {productInfo?.price}</p>
            <p className='data'>Status: {productInfo?.status}</p>
          </div>
          <div className='info__detail'>
            <p className='detail__text'>{productInfo?.description}</p>
          </div>
          <div className="text__add">
            <i className="fa-solid fa-truck"></i>
            <p className="add__context">
              <b> Ships:</b>
              <li>1 business day</li>
              <li>Free Shipping</li>
              <li>Get delivery dates</li>
            </p>
            <i className="fa-solid fa-bag-shopping"></i>
            <p className="add__context">
              <b> Pickup:</b>
              <li>Check availability</li>
            </p>
            <div className='add__div'>
              <button
                className='div__bag'
                onClick={addToCart}
              >
                Add to Bag
              </button>
              <div className='bag__button'>
                <button
                  onClick={()=>setRates(Number(rates) - 1)}
                  className='button__value1'>
                  <i className="fa-solid fa-minus"></i>
                </button>
                <p className='button__input'>{rates}</p>
                <button
                  onClick={()=> setRates(Number(rates) + 1)}
                  className='button__value2'>
                  <i className="fa-solid fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <p className="recommended">Discover similar items</p>
      <section className='detail__recommended'>
        <ul className='product__container'>
          {
            relateProduct.map((similar) => (
              <li className='container__li' key={similar.id}>
                <div className='li__card'>
                  <div className="card__li">
                    <Link
                      className='card__link'
                      to={`/products/${similar.id}`}
                    >
                      <img className='card__img' src={similar.productImgs[0]} alt="Product of product" />
                    </Link>
                  </div>
                  <div className="card__info">
                    <p className='card__title'>{similar.title}</p>
                    <p className='card__price'>From ${similar.price}</p>
                    <button className='card__button'>Buy</button>
                    <Link
                      className='card__moreInfo'
                      to={`/products/${similar.id}`}>
                      <p className='info__p'>Learn more </p>
                      <i className="fa-solid fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </li>))
          }
        </ul>
      </section>
    </div>
  );
};

export default ProductDetail;