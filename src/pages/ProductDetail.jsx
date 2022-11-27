import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getProductsThunk } from '../store/slices/product.slice';

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProductsThunk());
  }, []);

  const productList = useSelector((state) => state.products);

  const productInfo = productList.find((productData) => productData.id === Number(id));
  const relateProduct = productList.filter(
    (prodcutItem) => prodcutItem.category.id === productInfo.category.id
  );

  return (
    <div className='detail'>
      <section className='detail__section'>
        <h1 className='section__title'>{productInfo?.title}</h1>
        <div className='section__imgs'>
          <img className='imgs__cv' src={productInfo?.productImgs[0]} alt="" />
          <img className='imgs__cv' src={productInfo?.productImgs[1]} alt="" />
          <img className='imgs__cv' src={productInfo?.productImgs[2]} alt="" />
        </div>
        <p className='section__info'>Price: $ {productInfo?.price}</p>
        <p className='section__info'>Status: {productInfo?.status}</p>
        <div className='section__description'>
          <p className='description__title'>Detail</p>
          <p className='description__detail'>{productInfo?.description}</p>
        </div>
      </section>
      <section className='detail__recommended'>
        {
          relateProduct.map((similar)=>(
            <li className='recommended__li' key={similar.id}>
              <Link className='li__link' to={`/products/${similar.id}`}>
                {similar?.title}
              </Link>
            </li>
          ))
        }
      </section>
    </div>
  );
};

export default ProductDetail;