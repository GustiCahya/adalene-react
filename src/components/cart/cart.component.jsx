import React, {Component} from 'react';
import $ from 'utils/selector';
import M from 'materialize-css';
import './cart.styles.scss'

class Cart extends Component{
    render(){
        return (
            <li>
                <a href="/" data-target="cart-dropdown" className="cart dropdown-trigger">Cart (0)</a>
                <ul id="cart-dropdown" className="cart-dropdown dropdown-content">
                    <li>
                        <img src="https://dummyimage.com/200x200/000/fff" alt="product"/>
                        <h3>I'm a product</h3>
                        <p>
                            <i className="fas fa-chevron-left"></i>
                            <span> 12 </span>
                            <i className="fas fa-chevron-right"></i>
                        </p>
                    </li>
                    <li>
                        <img src="https://dummyimage.com/200x200/000/fff" alt="product"/>
                        <h3>I'm a product</h3>
                        <p>
                            <i className="fas fa-chevron-left"></i>
                            <span> 12 </span>
                            <i className="fas fa-chevron-right"></i>
                        </p>
                    </li>
                    <p>Total: 0 | Price: 500$</p>
                    <button className="btn blue">Buy</button>
                </ul>
            </li>
        )
    }
    componentDidMount(){
        M.Dropdown.init($('.dropdown-trigger'), {
            coverTrigger: false,
            closeOnClick: false
        });
    }
}

export default Cart;