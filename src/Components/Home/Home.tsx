import React from 'react'
import Button from '@material-ui/core/Button';
import style from './home.module.css'
import { useNavigate } from 'react-router-dom'
import  {InitialData} from '../../Reducer/ShoeSlice'
import {useDispatch} from 'react-redux'

export const Home = () => {
    const dispatch=useDispatch();
    const navigate = useNavigate();
    return (
        <div >
            <div className={style.Container}>
                <div className={style.content}>

                    <div className={style.Title}> New Arrivals </div>
                    <div className={style.detail}>
                        Nothing as fly, nothing as comfortable, nothing as proven—the Nike Air Max 90 stays true to its OG roots with the iconic Waffle outsole, stitched overlays and classic TPU accents. Celebrating the home and away kits of your favourite teams, the soft leather upper features a rub-away material that reveals a secondary colour through normal wear while Max Air cushioning adds comfort to your journey.
                        </div>

                </div>
                <div>
                    <img className={style.shoeimage} src="https://github.com/ahmedali8/react-shoe-store/blob/master/public/assets/images/shoe-6.png?raw=true"
                        alt="ShoeDisplayImage" />
                </div>
                <Button className={style.btn} variant="contained" color="secondary"
                    onClick={() => {
                        dispatch(InitialData())
                        navigate('/product/')
                    }}

                >
                    Shopping Now
                </Button>
            </div>

        </div>
    )
}
