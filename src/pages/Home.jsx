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

      <div className='home__page'>
        <h1 className='home__h1'>Store. The best way to by the products you love.</h1>
        {
          products.map((product) => (
            <li className='home__li' key={product.id}>
              <div className='home__card'>
                <Link
                  className='card__title'
                  to={`/products/${product.id}`}
                >
                  {product.title}
                </Link>
                <img className='card__img' src={product.productImgs[0]} alt="" />
              </div>
            </li>
          ))
        }
      </div>
    </div>
  );
};

export default Home;