import React, {useEffect, useState, useReducer} from 'react';
import Grid from '@material-ui/core/Grid';
import {ButtonBase, IconButton, Typography} from '@material-ui/core';
import washingMachine from '../../../assets/images/washing_machine.jpg';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Paper from '@material-ui/core/Paper';

import {makeStyles, Theme} from '@material-ui/core/styles';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../../redux/store';
import {
    actions,
    addOneProductInCart,
    setProductPriceAndCountProductThunk,
    setProductPriceThunk
} from '../../../redux/cartPageReducer';
import CloseIcon from '@material-ui/icons/Close';


export const useProductItemInCartStyles = makeStyles((theme: Theme) => ({
    productImg: {
        width: 100,
        height: 100,
    },
    productInCart: {
        maxWidth: 500,
        margin: '25px 15px',
    },
    closeButton: {
        marginTop: -80,
        marginRight: -20,
    },
    countBlock: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
}))

type PropsType = {
    productPrice: number
}


export const ProductItemInCart = () => {

    const classes = useProductItemInCartStyles();
    const totalPriceProduct = useSelector<AppStateType, number>(state => state.cartPage.totalPriceProduct);
    const productPrice = useSelector<AppStateType, number>(state => state.cartPage.productPrice);
    const productCountInCart = useSelector<AppStateType, number>(state => state.cartPage.productCountInCart);

    const dispatch = useDispatch();


    const count = totalPriceProduct / productPrice


    const addOneProduct = () => {
        let result = totalPriceProduct + productPrice;
        dispatch(setProductPriceAndCountProductThunk(result, productCountInCart + 1))
    }

    const minusOneProduct = () => {
        let result = totalPriceProduct - productPrice;
        dispatch(setProductPriceAndCountProductThunk(result, productCountInCart - 1))
    }


    return (
        <div className={classes.productInCart}>
            <Paper>
                <Grid container spacing={2} direction={'row'}>
                    <Grid item xs={4}>
                        <ButtonBase>
                            <img src={washingMachine} className={classes.productImg}/>
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography>
                            name name name
                        </Typography>
                        {`${totalPriceProduct}$`}
                    </Grid>
                    <Grid item xs={4} className={classes.countBlock}>
                        <Typography>
                            <IconButton onClick={minusOneProduct}  /*disabled={countProduct === 0}*/>
                                <RemoveIcon/>
                            </IconButton>
                            {productCountInCart}
                            <IconButton onClick={addOneProduct}>
                                <AddIcon/>
                            </IconButton>
                            <IconButton className={classes.closeButton}>
                                <CloseIcon/>
                            </IconButton>
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}
