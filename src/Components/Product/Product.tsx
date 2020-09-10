import React from 'react'

import style from './Product.module.css';
import  {useSelector}  from 'react-redux'
import {shoeData} from '../../Reducer/ShoeSlice'

export const Product = () => {
    const data = useSelector(shoeData);
    console.log(data);
    return (
        <div>
            <div className={style.ProductContainer}>
            Product Page
            </div>
        </div>
    )
}
