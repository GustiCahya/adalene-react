import { CartActionTypes } from './cart.types';
import { addItemToCartUtils, decreaseItemInCartUtils, increaseItemInCartUtils } from './cart.utils';

const INITIAL_STATE = {
    cartItems : []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CartActionTypes.ADD_TO_CART:
            return {
                ...state,
                cartItems: addItemToCartUtils(state.cartItems, action.payload)
            };
        case CartActionTypes.DECREASE_ITEM_IN_CART:
            return {
                ...state,
                cartItems: decreaseItemInCartUtils(state.cartItems, action.payload)
            };
        case CartActionTypes.INCREASE_ITEM_IN_CART:
            return {
                ...state,
                cartItems: increaseItemInCartUtils(state.cartItems, action.payload)
            };
        default:
            return {...state};
    }
}

export default cartReducer;