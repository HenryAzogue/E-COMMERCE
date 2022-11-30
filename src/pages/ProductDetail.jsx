import React, { useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getProductsThunk } from '../store/slices/product.slice';

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProductsThunk());
  }, []);

  const productList = useSelector((state) => state.products)

  const productInfo = productList.find((productData) => productData.id === Number(id));
  const relateProduct = productList.filter(
    (prodcutItem) => prodcutItem.category.id === productInfo.category.id
  );

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