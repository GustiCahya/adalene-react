import React, {Component} from 'react';
import { connect } from 'react-redux';

import 'materialize-css/dist/css/materialize.min.css';
import './shop.styles.scss';

import $ from 'utils/selector';
import M from 'materialize-css';

import Loading from 'components/loading/loading.component';

import { fetchAllItemsShop } from 'firebase/firebase.utils';
import { addItemToCart } from 'redux/cart/cart.actions';
import { selectCurrentUser } from 'redux/user/user.selectors'

class Shop extends Component{
    state = {
        items: []
    }
    handleAddItem = (event, item) => {
        event.preventDefault();
        const {addItemToCart, currentUser} = this.props;
        if(currentUser){
            addItemToCart(item)
        }else{
            M.toast({html: "Please Login First"})
        }
    }
    render(){
        const {items} = this.state;
        return(
            <main>
                <div className="shop-page">
                    <h1>SHOP ALL</h1>
                    <div className="row container">
                        <div className="filter col m3 hide-on-small-and-down">
                            <ul className="collapsible">
                                <h2>Filter by</h2>
                                <li className="filter-list collection">
                                    <div className="collapsible-header">Collection <i className="material-icons">arrow_drop_down</i></div>
                                    <div className="collapsible-body">
                                        <ul>
                                            <li><a className="active" href="/">All</a></li>
                                            <li><a href="/">Phone Cases</a></li>
                                            <li><a href="/">Mini Leather Goods</a></li>
                                            <li><a href="/">Leather Belts</a></li>
                                            <li><a href="/">Best Sellers</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="filter-list price">
                                    <div className="collapsible-header">Price <i className="material-icons">arrow_drop_down</i></div>
                                    <div className="collapsible-body">
                                        <p className="range-field">
                                            <input type="range" min="25" max="400" />
                                        </p>
                                    </div>
                                </li>
                                <li className="filter-list model">
                                    <div className="collapsible-header">Model <i className="material-icons">arrow_drop_down</i></div>
                                    <div className="collapsible-body">
                                        <label>
                                            <input type="checkbox" className="filled-in" />
                                            <span style={{color:"#5f5f5f", fontSize: "1.1rem"}}>IphoneX</span>
                                        </label>
                                        <label>
                                            <input type="checkbox" className="filled-in" />
                                            <span style={{color:"#5f5f5f", fontSize: "1.1rem"}}>IphoneXS</span>
                                        </label>
                                    </div>
                                </li>
                                <li className="filter-list size">
                                    <div className="collapsible-header">Size <i className="material-icons">arrow_drop_down</i></div>
                                    <div className="collapsible-body">
                                        <label>
                                            <input type="checkbox" className="filled-in" />
                                            <span style={{color:"#5f5f5f", fontSize: "1.1rem"}}>Large</span>
                                        </label>
                                        <label>
                                            <input type="checkbox" className="filled-in" />
                                            <span style={{color:"#5f5f5f", fontSize: "1.1rem"}}>Medium</span>
                                        </label>
                                        <label>
                                            <input type="checkbox" className="filled-in" />
                                            <span style={{color:"#5f5f5f", fontSize: "1.1rem"}}>Small</span>
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="items col s12 m9">
                            {
                                (items.length > 0)
                                ? items.map((item, index) => (
                                        <a 
                                            key={item.id} 
                                            onClick={(event) => this.handleAddItem(event, item)} 
                                            href="/" 
                                            className="item">
                                            <div className="item__image">
                                                <div 
                                                    className="item__image--badge" 
                                                    style={(index < 5) ? {} : {display: 'none'}}>
                                                    Best Seller
                                                </div>
                                                <img loading="lazy" src={item.image} alt="product" />
                                                <div className="item__image--label">
                                                    Add to Cart
                                                </div>
                                            </div>
                                            <p className="item__title">{item.name}</p>
                                            <p className="item__price">${item.price}</p>
                                        </a>
                                    ))
                                : <Loading />
                            }
                        </div>
                    </div>
                </div>
            </main>
        )
    }
    componentDidMount(){
        M.Collapsible.init($('.collapsible'));
        fetchAllItemsShop().then(items => this.setState({items: items}));
    }
}

const mapStateToProps = (state) => ({
    currentUser: selectCurrentUser(state)
})

const mapDispatchToProps = (dispatch) => ({
    addItemToCart: (item) => dispatch(addItemToCart(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(Shop);