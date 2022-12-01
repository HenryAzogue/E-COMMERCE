import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { filterCategoryProductThunk, filterNameProductThunk, getProductsThunk } from '../store/slices/product.slice';

const Home = () => {

  const [inputSearch, setInputSearch] = useState("");
  const [categoryProduct, setCategoryProduct] = useState([]);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductsThunk());

    axios.get("https://e-commerce-api.academlo.tech/api/v1/products/categories")
      .then((res) => setCategoryProduct(res.data.data.categories));
  }, []);

  return (
    <div className='home'>
      {/*Category*/}
      <div className='home__category'>
        <div className='category__input'>
          <input
            className='input__search'
            type="text"
            placeholder='Search'
            value={inputSearch}
            onChange={(e) => setInputSearch(e.target.value)}
          />
          <button
            className='input__btn'
            onClick={() => dispatch(filterNameProductThunk(inputSearch))}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <section className='category__option'>
          {
            categoryProduct.map((category) => (
              <li className='option__li' key={category.id}>
                <button
                  onClick={() => dispatch(filterCategoryProductThunk(category.id))}
                  className='option__btn'
                >{category.name}</button>
              </li>
            ))
          }
        </section>
      </div>

      {/*All Products*/}
      <div className='home__product'>
        <div className="product__h1">
          <p className='h1__p h1__p--text'>
            <span className='h1__span'>Store.</span>
            The best way to by the products you love.</p>
        </div>
        <ul className='product__container'>
          {
            products.map((product) => (
              <li className='container__li' key={product.id}>
                <div className='li__card'>
                  <div className="card__li">
                    <Link
                      className='card__link'
                      to={`/products/${product.id}`}
                    >
                      <img className='card__img' src={product.productImgs[0]} alt="" />
                    </Link>
                  </div>
                  <div className="card__info">
                    <p className='card__title'>{product.title}</p>
                    <p className='card__price'>From ${product.price}</p>
                    <button 
                      className='card__button'                      
                    >
                      <Link 
                      className='card__button--link'                      
                      to={`/products/${product.id}`}>
                      Buy
                      </Link>
                    </button>

                    <Link
                      className='card__moreInfo'
                      to={`/products/${product.id}`}>
                      <p className='info__p'>Learn more </p>
                      <i className="fa-solid fa-angle-right"></i>
                    </Link>

                  </div>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default Home;