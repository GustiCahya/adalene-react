import { CartActionTypes } from './cart.types';

export const addItemToCart = (item) => ({
    type: CartActionTypes.ADD_TO_CART,
    payload: item
})

export const decreaseItemInCart = (id) => ({
    type: CartActionTypes.DECREASE_ITEM_IN_CART,
    payload: id
})

export const increaseItemInCart = (id) => ({
    type: CartActionTypes.INCREASE_ITEM_IN_CART,
    payload: id
})