//
// export const restoreStateLocalStorage = (key:string, defState:string) => {
//
//     let state = defState;
//     let stateAsString = localStorage.getItem(key);
//     if (stateAsString != null) {
//         state = JSON.parse(stateAsString);
//     }
//     return state;
// }
// export const saveStateToLocalStorage = (state:string, key:string) => {
//
//     let stateAsString = JSON.stringify(state);
//     localStorage.setItem(key, stateAsString);
// }


import {AppStateType} from '../../redux/store';

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state: AppStateType) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch {
        // ignore write errors
    }
};
