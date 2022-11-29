import { createSlice } from '@reduxjs/toolkit';
import {setIsLoading} from './isLoading.slice'
import axios from 'axios';
import getConfig from '../../util/getConfig'

export const purchasesSlice = createSlice({
    name: 'purchases',
    initialState: [],
    reducers: {
      getPurchases: ( state, action)=> {
        return action.payload;
      }
    }
})

export const getPurchasesThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios
        .get("https://e-commerce-api.academlo.tech/api/v1/purchases", getConfig())
        .then((res) => dispatch(getPurchases(res.data.data.purchases)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const { getPurchases } = purchasesSlice.actions;

export default purchasesSlice.reducer;
