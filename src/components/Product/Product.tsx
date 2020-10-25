import React, {useState} from 'react';
import washingMachine from './../../assets/images/washing_machine.jpg';
import {makeStyles, Theme} from '@material-ui/core/styles';
import {Card, CardContent, CardActions, Button, CardActionArea} from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';
import {setProductPriceAndCountProductThunk, setProductPriceThunk} from '../../redux/cartPageReducer';
import {AppStateType} from '../../redux/store';



export const useProductStyles = makeStyles((theme: Theme) => ({
    card: {
        boxShadow: '5px 5px 5px 0px rgba(0,0,0,0.75)',
        textAlign: 'center',
        marginTop: 10,
    },
    button: {
        marginLeft: 40
    },
    price: {
        marginTop: 15,
    },

}))

type PropsType = {

}

export const Product = () => {

    const classes = useProductStyles();
    const dispatch = useDispatch();
    const totalPriceProduct = useSelector<AppStateType, number>(state => state.cartPage.totalPriceProduct);
    const productCountInCart = useSelector<AppStateType, number>(state => state.cartPage.productCountInCart);
    const productPrice = useSelector<AppStateType, number>(state => state.cartPage.productPrice);



    const AddProductToCart = () => {

        let result = totalPriceProduct + productPrice;


        dispatch(setProductPriceAndCountProductThunk( result,productCountInCart + 1))
    }

    return (
        <Card className={classes.card}>
            <CardContent>
                <CardActionArea>
                    <img src={washingMachine} width={350} height={300} />
                    <div>
                        name
                        name

                    </div>

                    <div className={classes.price}>
                        {`${productPrice}$`}
                        <Button variant={'contained'} color='primary' className={classes.button} onClick={AddProductToCart} >Add to cart</Button>
                    </div>
                </CardActionArea>
            </CardContent>
        </Card>
    )
}
