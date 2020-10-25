import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk'
import { cartPageReducer } from './cartPageReducer';
import {loadState, saveState} from '../common/utils/LocalStorage';

export type InferActionTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never;

const rootReducer = combineReducers({
    cartPage: cartPageReducer
})



export type RootReducerType = typeof rootReducer;

export type AppStateType = ReturnType<RootReducerType>;

// export const store = createStore(rootReducer, applyMiddleware(thunk));


const persistedState = loadState();
export const store = createStore(
    rootReducer, persistedState, applyMiddleware(thunk)
);
store.subscribe(() => {
    saveState({
        cartPage: store.getState().cartPage
    });
}); // add Local Storag to project

