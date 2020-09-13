import React from 'react'
import style from './cart.module.css'
import { CartData } from '../../Reducer/ShoeSlice'
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import { DelItem, AddQuantity, DelQuantity, CheckOut, DelMenu } from '../../Reducer/ShoeSlice'

export const Cart = () => {
    const dispatch = useDispatch();
    const cartdata = useSelector(CartData);
    const { Addcart } = cartdata;
    console.log(Addcart)

    const TotalPrice = Addcart.map((obj: any) => {
        return (
            obj.totalPrice
        )
    })

    const TotalAmount = TotalPrice.reduce((item1: number, item2: number) => (item1 + item2), 0).toFixed(2);
    console.log(TotalAmount)
    if (!Addcart.length) {
        return (
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
                                            <button className={style.add}
                                                onClick={() => { dispatch(AddQuantity(obj.id)) }}
                                            >+</button>
                                            <button className={style.sub}
                                                disabled={obj.Quantity > 1 ? false : true}
                                                onClick={() => { dispatch(DelQuantity(obj.id)) }}
                                            >-</button>
                                        </div>
                                    </td>
                                    <td>
                                        Rs: {obj.price}
                                    </td>
                                    <td>Rs: {obj.totalPrice}</td>
                                    <th>
                                        <Button variant="contained" color="secondary"
                                            onClick={() => {
                                                dispatch(DelItem(obj.id))
                                                dispatch(DelMenu(''))
                                            }}
                                        >
                                            Remove
                                     </Button>
                                    </th>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
            <div className={style.Tprice}>
                Total Amount Rs: {TotalAmount}

            </div>
            <div className={style.Checkout}>
                <Button className={style.Checkoutbtn} variant="contained" color="primary"
                    onClick={() => { dispatch(CheckOut(null)) 
                    alert('ThankYou We Hope You Enjoy')
                    }}
                >
                    Checkout
                </Button>
            </div>
        </div>
    )
}
