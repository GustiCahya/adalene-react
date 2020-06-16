export const addItemToCartUtils = (cartItems, item) => {
    const isExist = cartItems.find(cartItem => cartItem.id === item.id);
    if(isExist){
        cartItems = cartItems.map((cartItem) => (
            (isExist.id === cartItem.id)
            ? {...cartItem, total: cartItem.total+1, totalPrice: cartItem.price * (cartItem.total+1)}
            : {...cartItem}
        ))
        return [...cartItems]
    }
    return [...cartItems, {...item, total: 1, totalPrice: item.price}]
}

export const decreaseItemInCartUtils = (cartItems, id) => {
    cartItems = cartItems.map((cartItem) => (
        (cartItem.id === id)
        ? {...cartItem, total: cartItem.total - 1, totalPrice: cartItem.price * (cartItem.total-1)}
        : {...cartItem}
        ))
    cartItems = cartItems.filter(cartItem => cartItem.totalPrice > 0);
    return [...cartItems]
}

export const increaseItemInCartUtils = (cartItems, id) => {
    cartItems = cartItems.map((cartItem) => (
        (cartItem.id === id)
        ? {...cartItem, total: cartItem.total + 1, totalPrice: cartItem.price * (cartItem.total+1)}
        : {...cartItem}
        ))
    return [...cartItems]
}