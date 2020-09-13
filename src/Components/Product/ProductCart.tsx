import React from 'react'
import style from './Product.module.css';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { Additem, CartData,AddMenu } from '../../Reducer/ShoeSlice'

type Props = {
    name: string;
    price: number;
    Quantity: number;
    img: string;
    totalPrice: number;
    id: string;
}

export const ProductCart: React.FC<Props> = ({ name, price, Quantity, img, id, totalPrice }) => {
    let tempShoe = {
        name,
        price,
        Quantity,
        img,
        id,
        totalPrice
    }
    const dispatch = useDispatch();
    const cartdata = useSelector(CartData);
    const { Addcart } = cartdata;
    return (
        <div className={style.Caontainer}>
            <div className={style.card}>
                <div className={style.circle}>
                    <br />
                    <span style={{ margin: '19px', color: 'white', fontFamily: 'Bree Serif', textTransform: 'uppercase', fontWeight: 'bold' }}>
                        Rs: {price}
                    </span>
                </div>
                <div className={style.content}>
                    <div className={style.detail}>
                        <img className={style.image}
                            src={img}
                            alt="shoeimage" />
                    </div>

                    <div className={style.title}>{name}</div>
                    <Button className={style.button} variant="contained" color="secondary"
                        onClick={() => {
                            let check = false;
                            Addcart.map((obj: any) => {
                                if (obj.id === id) {
                                    check = true;
                                }
                                return(
                                    <></>
                                )
                            })
                            if (check) {
                                console.log('notadd')
                            }
                            else {
                                console.log('add')
                                dispatch(Additem(tempShoe))
                                dispatch(AddMenu(''))
                            }
                        }}
                    >
                        Add to cart
                    </Button>

                </div>

            </div>
        </div>
    )
}
