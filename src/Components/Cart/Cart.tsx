import React from 'react'
import style from './cart.module.css'
import { CartData } from '../../Reducer/ShoeSlice'
import { useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';

export const Cart = () => {
    const cartdata = useSelector(CartData);
    const { Addcart } = cartdata;
    console.log(Addcart)

    if(!Addcart.length){
        return(
            <div className={style.empty}>
                Your Cart Is Empty
            </div>
        )
    }
    return (
        <div className={style.cartContainer}>
            <table className={style.table}>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>ProductName</th>
                        <th>Qunatity</th>
                        <th>Price</th>
                        <th>TotalPrice</th>
                        <th>Remove</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        Addcart.map((obj: any) => {

                            return (
                                <tr>
                                    <td className={style.imgtd}>
                                        <img className={style.Shoeimg} src={obj.img}
                                            alt="Shoeimg" />
                                    </td>
                                    <td>
                                        {obj.name}
                                    </td>
                                    <td>
                                        <div>{obj.Quantity}</div>
                                        <div>
                                            <button className={style.add}>+</button>
                                            <button className={style.sub}>-</button>
                                        </div>
                                    </td>
                                    <td>
                                        {obj.price}
                                    </td>
                                    <td>{obj.totalPrice}</td>
                                    <th>
                                        <Button variant="contained" color="secondary">
                                            Remove
                                     </Button>
                                    </th>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}
