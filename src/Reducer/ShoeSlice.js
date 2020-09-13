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
        Items: 0
    },
    isloading: false,
    reducers: {
        Additem: (state, action) => {
            return {
                ...state,
                cart: [action.payload, ...state.cart],
               
            }
        },
        AddMenu:(state)=>{
            state.Items++;
        },
        DelItem: (state, action) => {
            return {
                ...state,
                cart: state.cart.filter((obj) => {
                    console.log(obj.id)
                    return (
                        obj.id !== action.payload
                    )
                }),
            }
        },
        DelMenu:(state)=>{
            state.Items--;
        },
        AddQuantity: (state, action) => {
            return {
                ...state,
                cart: state.cart.map((item) => {
                    if (item.id === action.payload) {
                        console.log('yes')
                        let tempShoe = {
                            name: item.name,
                            price: item.price,
                            Quantity: item.Quantity + 1,
                            img: item.img,
                            id: item.id,
                            totalPrice: item.totalPrice + item.price
                        }
                        console.log(tempShoe.Quantity)
                        return tempShoe
                    }
                    else {
                        return item
                    }

                })
            }
        },
        DelQuantity: (state, action) => {
            return {
                ...state,
                cart: state.cart.map((item) => {
                    if (item.id === action.payload) {
                        console.log('yes')
                        let tempShoe = {
                            name: item.name,
                            price: item.price,
                            Quantity: item.Quantity - 1,
                            img: item.img,
                            id: item.id,
                            totalPrice: item.totalPrice - item.price
                        }
                        console.log(tempShoe.Quantity)
                        return tempShoe
                    }
                    else {
                        return item
                    }

                })
            }
        },
        CheckOut: (state) => {
            return {
                ...state,
                cart: []
            }
        }

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

export const { Additem,AddMenu,DelMenu, DelItem, AddQuantity, DelQuantity, CheckOut } = ShoeSlice.actions;

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

export const ItemData = (state) =>(state.shoe.Items)
        
export default ShoeSlice.reducer;