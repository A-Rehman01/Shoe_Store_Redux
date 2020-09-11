import React from 'react'
import { ProductCart } from './ProductCart'
import style from './Product.module.css';
import { useSelector } from 'react-redux'
import { shoeData } from '../../Reducer/ShoeSlice'

import shoe from '../../FakeData/shoe.json'
export const Product = () => {

    const data: any = useSelector(shoeData);
    console.log(shoe);
    const { value } = data
    console.log(value);
    return (
        <div >
            <div className={style.Maintitle}>
                Our Product
            </div>
            <div className={style.ProductCart}>
                {
                    Object.keys(value).map((Objpro) => {     //Object.keys array return kare ga name ki
                        const tempShoe: any = value[Objpro];
                        return (
                            <div className={style.cardiv}>
                                <ProductCart
                                    name={tempShoe.name}
                                    price={tempShoe.Price}
                                    Quantity={tempShoe.Quantity}
                                    img={tempShoe.img}
                                    id={tempShoe.id}
                                    totalPrice={tempShoe.totalPrice}
                                />
                            </div>
                        )
                    }
                    )}
            </div>
        </div >
    )
}
