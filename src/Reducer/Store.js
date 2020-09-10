import  {configureStore} from '@reduxjs/toolkit'
import ShoeSlice from  './ShoeSlice' 

export const ShoeStore  = configureStore({
    reducer:{
        shoe:ShoeSlice
    }
})