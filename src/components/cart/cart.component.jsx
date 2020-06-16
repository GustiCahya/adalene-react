import React, {Component} from 'react';
import $ from 'utils/selector';
import M from 'materialize-css';
import './cart.styles.scss'
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { decreaseItemInCart, increaseItemInCart } from '../../redux/cart/cart.actions';

class Cart extends Component{
    handleDecreaseItem = (event, id) => {
        event.preventDefault();
        const { decreaseItem } = this.props;
        decreaseItem(id);
    }
    handleIncreaseItem = (event, id) => {
        event.preventDefault();
        const { increaseItem } = this.props;
        increaseItem(id);
    }
    render(){
        const { cartItems } = this.props;
        return (
            <li>
                <a href="/" data-target="cart-dropdown" className="cart dropdown-trigger">Cart ({this.getSumTotalItems()})</a>
                <ul id="cart-dropdown" className="cart-dropdown dropdown-content">
                    {
                        (cartItems.length > 0) 
                        ? cartItems.map((cartItem) => (
                            <li key={cartItem.id}>
                                <img src={cartItem.image} alt="product"/>
                                <h3>{cartItem.name}</h3>
                                <p>
                                    <span>${cartItem.totalPrice}&nbsp;&nbsp;</span>
                                    <a href="/" 
                                        className="pointer" 
                                        onClick={event => this.handleDecreaseItem(event, cartItem.id)}
                                    >
                                        <i className="fas fa-chevron-left"></i>
                                    </a>
                                    <span> {cartItem.total} </span>
                                    <a href="/" 
                                        className="pointer" 
                                        onClick={event => this.handleIncreaseItem(event, cartItem.id)}
                                    >
                                        <i className="fas fa-chevron-right"></i>
                                    </a>
                                </p>
                            </li>
                        )) 
                        : <li className="cart-empty"><span>Cart is empty</span></li>
                    }
                    <p>Total: {this.getSumTotalItems()} | Price: {this.getSumPriceItems()}$</p>
                    <button className="btn blue">Buy</button>
                </ul>
            </li>
        )
    }
    getSumPriceItems = () => {
        const { cartItems } = this.props;
        return cartItems.reduce((accumulation, currentValue) => accumulation + currentValue.totalPrice ,0)
    }
    getSumTotalItems = () => {
        const { cartItems } = this.props;
        return cartItems.reduce((accumulation, currentValue) => accumulation + currentValue.total ,0)
    }
    componentDidMount(){
        M.Dropdown.init($('.dropdown-trigger'), {
            coverTrigger: false,
            closeOnClick: false
        });
    }
}

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})

const mapDispatchToProps = (dispatch) => ({
    decreaseItem: (id) => dispatch(decreaseItemInCart(id)),
    increaseItem: (id) => dispatch(increaseItemInCart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);