import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
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
        .finally(() => dispatch(setIsLoading(false)));
}

export const { getCart } = cartSlice.actions;

export default cartSlice.reducer;
