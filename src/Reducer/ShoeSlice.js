import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import {URL} from '../Server/MirageServer'

export const InitialData = createAsyncThunk(
    'getdatafromapi',
    async () => {
        console.log('Call API')
        let response = await fetch(URL)
        let data = await response.json()
        console.log(data)
        return  data
    }
)

export const ShoeSlice = createSlice({
    name: 'shoe',
    initialState: {
        value: [],
    },
    isloading: false,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
    },
    extraReducers: {
        [InitialData.fulfilled]: (state, action) => {
            console.log(state, action)
            state.value = action.payload;
        },
        [InitialData.reject]: (state, action) => {
            console.log('API Rejected');
            state.isloading = false;
        },
        [InitialData.pending]: (state, action) => {
            state.isloading = true;
        },
    }
})

export const { increment, decrement, reset } = ShoeSlice.actions;

export const shoeData = (state) => {
    return ({
        value: state.shoe.value,
        loading: state.shoe.isloading
    })
}
export default ShoeSlice.reducer;