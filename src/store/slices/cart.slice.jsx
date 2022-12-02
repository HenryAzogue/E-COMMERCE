import { createSlice } from '@reduxjs/toolkit';
import axios, { Axios } from 'axios';
import getConfig from '../../util/getConfig'
import {setIsLoading} from './isLoading.slice'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        getCart: (state, action) => {
          return action.payload;
        }

    }
})
export const getCartThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios
        .get('https://e-commerce-api.academlo.tech/api/v1/cart', getConfig())
        .then((res) => dispatch(getCart(res.data.data.cart.products)))
        .catch(error => console.log(error.response.data))
        .finally(() => dispatch(setIsLoading(false)));
}

export const addProductThunk = (addProduct) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios
        .post("https://e-commerce-api.academlo.tech/api/v1/cart", addProduct, getConfig())
        .then(() => dispatch(getCartThunk()))
        .catch(error => console.log(error.response.data))
        .finally(() => dispatch(setIsLoading(false)));
}

export const checkOutThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios
        .post("https://e-commerce-api.academlo.tech/api/v1/purchases", {}, getConfig())
        .then(() => dispatch(getCart([])))
        .catch(error => console.log(error.response.data))
        .finally(() => dispatch(setIsLoading(false)));
}

export const deleteProductThunk = (id) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.delete(`https://e-commerce-api.academlo.tech/api/v1/cart/${id}`, getConfig())
        .then(() => dispatch(getCartThunk()))
        .catch((error) => console.log(error.response.data))
        .finally(() => dispatch(setIsLoading(false)));
}

export const { getCart } = cartSlice.actions;

export default cartSlice.reducer;
