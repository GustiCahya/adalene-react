import React, {Component} from 'react';
import $ from 'utils/selector';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import './shop.styles.scss';

class Shop extends Component{
    render(){
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
                            <a href="/" className="item">
                                <div className="item__image">
                                    <div className="item__image--badge">
                                        Best Seller
                                    </div>
                                    <img loading="lazy" src="https://dummyimage.com/200x200/000/fff" alt="product" />
                                    <div className="item__image--label">
                                        Add to Cart
                                    </div>
                                </div>
                                <p className="item__title">I'm a product</p>
                                <p className="item__price">$250.00</p>
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
    componentDidMount(){
        M.Collapsible.init($('.collapsible'));
    }
}

export default Shop;