import {AppStateType, InferActionTypes} from './store';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';


export const TOTAL_PRICE_PRODUCT = 'CART_PAGE_REDUCER/TOTOTAL_PRICE_PRODUCT';
export const ADD_ONE_PRODUCT = 'CART_PAGE_REDUCER/ADD_ONE_PRODUCT';
export const SET_PRODUCT_PRICE_AND_COUNT_PRODUCT = 'CART_PAGE_REDUCER/SET_PRODUCT_PRICE_AND_COUNT_PRODUCT'


const initialState = {
    totalPriceProduct: 0 as number,
    productPrice: 300 as number,
    productCountInCart: 0 as number
}

type InitialStateType = typeof initialState;



export const cartPageReducer = (state: InitialStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case TOTAL_PRICE_PRODUCT: {
            return {...state, totalPriceProduct:  action.productPrice}
        }
        case ADD_ONE_PRODUCT: {
            return {...state, productCountInCart: action.productCountInCart}
        }
        case SET_PRODUCT_PRICE_AND_COUNT_PRODUCT: {
            debugger
            return {...state, productCountInCart: action.payload.productCountInCart, totalPriceProduct: action.payload.productPrice }
        }

        default:
            return state

    }
}

type ActionType = InferActionTypes<typeof actions>;
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionType>;

export const actions ={
    setProductPrice: (productPrice: number) => {
        return ({type: TOTAL_PRICE_PRODUCT, productPrice } as const )
    },
    addOneProductInCart: (productCountInCart: number) => {
        debugger
        return ({type: ADD_ONE_PRODUCT, productCountInCart } as const )
    },


    setProductPriceAndCountProductThunk: (productPrice: number, productCountInCart: number) => {
        debugger

        return ({type: SET_PRODUCT_PRICE_AND_COUNT_PRODUCT, payload: {productPrice, productCountInCart}  } as const )
    },

}

//thunk




export const setProductPriceThunk = (productPrice: number):ThunkType => async (dispatch: ThunkDispatch<AppStateType, unknown, ActionType>, getState: () => AppStateType ) => {
    try {
        dispatch(actions.setProductPrice(productPrice))
    }
    catch (e) {

    }
}
export const addOneProductInCart = (productCountInCart: number):ThunkType => async (dispatch: ThunkDispatch<AppStateType, unknown, ActionType>, getState: () => AppStateType ) => {
    try {
        debugger

        dispatch(actions.addOneProductInCart(productCountInCart))
    }
    catch (e) {

    }
}

export const setProductPriceAndCountProductThunk = (productPrice: number, productCountInCart: number):ThunkType => async (dispatch: ThunkDispatch<AppStateType, unknown, ActionType>, getState: () => AppStateType ) => {

    try {
        debugger

        dispatch(actions.setProductPriceAndCountProductThunk(productPrice, productCountInCart))
    }
    catch (e) {

    }
}
