import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { URL } from '../Server/MirageServer'

export const InitialData = createAsyncThunk(
    'getdatafromapi',
    async () => {
        console.log('Call API')
        let response = await fetch(URL)
        let data = await response.json()
        console.log(data)
        return data
    }
)

export const ShoeSlice = createSlice({
    name: 'shoe',
    initialState: {
        value: [],
        cart: [],
    },

    isloading: false,
    reducers: {
        Additem: (state, action) => {
            return {
                ...state,
                cart: [action.payload, ...state.cart]
            }
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

export const { Additem } = ShoeSlice.actions;

export const shoeData = (state) => {
    return ({
        value: state.shoe.value,
        loading: state.shoe.isloading,

    })
}
export const CartData = (state) => {
    return ({
        Addcart: state.shoe.cart,
    })
}
export default ShoeSlice.reducer;