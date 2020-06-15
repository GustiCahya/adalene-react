import React, {Component} from 'react';
import $ from 'utils/selector'
import M from 'materialize-css'

import 'swiper/css/swiper.min.css';
import Swiper from 'swiper';

import 'materialize-css/dist/css/materialize.min.css';
import './homepage.styles.scss'
import navbarIntersecting from 'utils/navbarIntersecting';


class Homepage extends Component {
    render(){
        return(
            <main>
                <section className="hero">
                    <div className="hero__content">
                        <h1>CUE THE COLOR</h1>
                        <button className="btn waves-effect waves-orange transparent adalene-effect">Shop the collection</button>
                    </div>
                </section>
                <section className="best-sellers container">
                    <h1 className="best-sellers__title">Best Sellers</h1>
                    <div className="best-sellers__underline"></div>
                    <div className="best-sellers__items swiper-container">
                        <div className="best-items swiper-wrapper">
                            <a href="/" onClick={(event) => event.preventDefault()} className="best-item swiper-slide">
                                <div className="best-item__image">
                                    <div className="best-item__image--badge">
                                        Best Seller
                                    </div>
                                    <img loading="lazy" src="https://dummyimage.com/200x200/000/fff" alt="product" />
                                    <div className="best-item__image--label">
                                        Add to cart
                                    </div>
                                </div>
                                <p className="best-item__title">I'm a product</p>
                                <p className="best-item__price">$250.00</p>
                            </a>
                            <a href="/" onClick={(event) => event.preventDefault()} className="best-item swiper-slide">
                                <div className="best-item__image">
                                    <div className="best-item__image--badge">
                                        Best Seller
                                    </div>
                                    <img loading="lazy" src="https://dummyimage.com/200x200/000/fff" alt="product" />
                                    <div className="best-item__image--label">
                                        Add to cart
                                    </div>
                                </div>
                                <p className="best-item__title">I'm a product</p>
                                <p className="best-item__price">$250.00</p>
                            </a>
                            <a href="/" onClick={(event) => event.preventDefault()} className="best-item swiper-slide">
                                <div className="best-item__image">
                                    <div className="best-item__image--badge">
                                        Best Seller
                                    </div>
                                    <img loading="lazy" src="https://dummyimage.com/200x200/000/fff" alt="product" />
                                    <div className="best-item__image--label">
                                        Add to cart
                                    </div>
                                </div>
                                <p className="best-item__title">I'm a product</p>
                                <p className="best-item__price">$250.00</p>
                            </a>
                            <a href="/" onClick={(event) => event.preventDefault()} className="best-item swiper-slide">
                                <div className="best-item__image">
                                    <div className="best-item__image--badge">
                                        Best Seller
                                    </div>
                                    <img loading="lazy" src="https://dummyimage.com/200x200/000/fff" alt="product" />
                                    <div className="best-item__image--label">
                                        Add to cart
                                    </div>
                                </div>
                                <p className="best-item__title">I'm a product</p>
                                <p className="best-item__price">$250.00</p>
                            </a>
                            <a href="/" onClick={(event) => event.preventDefault()} className="best-item swiper-slide">
                                <div className="best-item__image">
                                    <div className="best-item__image--badge">
                                        Best Seller
                                    </div>
                                    <img loading="lazy" src="https://dummyimage.com/200x200/000/fff" alt="product" />
                                    <div className="best-item__image--label">
                                        Add to cart
                                    </div>
                                </div>
                                <p className="best-item__title">I'm a product</p>
                                <p className="best-item__price">$250.00</p>
                            </a>
                            <a href="/" onClick={(event) => event.preventDefault()} className="best-item swiper-slide">
                                <div className="best-item__image">
                                    <div className="best-item__image--badge">
                                        Best Seller
                                    </div>
                                    <img loading="lazy" src="https://dummyimage.com/200x200/000/fff" alt="product" />
                                    <div className="best-item__image--label">
                                        Add to cart
                                    </div>
                                </div>
                                <p className="best-item__title">I'm a product</p>
                                <p className="best-item__price">$250.00</p>
                            </a>
                            <a href="/" onClick={(event) => event.preventDefault()} className="best-item swiper-slide">
                                <div className="best-item__image">
                                    <div className="best-item__image--badge">
                                        Best Seller
                                    </div>
                                    <img loading="lazy" src="https://dummyimage.com/200x200/000/fff" alt="product" />
                                    <div className="best-item__image--label">
                                        Add to cart
                                    </div>
                                </div>
                                <p className="best-item__title">I'm a product</p>
                                <p className="best-item__price">$250.00</p>
                            </a>
                        </div>
                        <i className="fas fa-chevron-left"></i>
                        <i className="fas fa-chevron-right"></i>
                    </div>
                    <button className="btn waves-effect transparent adalene-effect-reverse">Shop All Bags</button>
                </section>
                <section className="featured">
                    <div className="featured__product-1">
                        <div className="product-wrapper">
                            <img loading="lazy" alt="purse" src={require("./images/featured/purse.png")} width="300"/>
                            <p className="title">I'm a product</p>
                            <p className="price">$100.00</p>
                            <button className="btn waves-effect waves-orange transparent adalene-effect-reverse">Add to Cart</button>
                        </div>
                    </div>
                    <div className="featured__showcase-1 parallax-container">
                        <div className="parallax">
                            <img loading="lazy" alt="purse showcase" src={require("./images/featured/purse-showcase.jpg")}/>
                        </div>
                        <h1>MINI LEATHER PURSE</h1>
                    </div>
                    <div className="featured__showcase-2">
                        <h1>LEATHER BELTS</h1>
                    </div>
                    <div className="featured__product-2">
                        <div className="product-wrapper">
                            <img loading="lazy" alt="pict" src={require("./images/featured/belt.png")} width="300"/>
                            <p className="title">I'm a product</p>
                            <p className="price">$100.00</p>
                            <button className="btn waves-effect waves-orange transparent adalene-effect-reverse">Add to Cart</button>
                        </div>
                    </div>
                </section>
                <section className="about container">
                    <div className="about-wrapper row">
                        <div className="col l4 m6 s12">
                            <img loading="lazy" alt="pict" src={require("./images/about/about-1.jpg")}/>
                            <div className="content">
                                <h2>Family Owned</h2>
                                <h3>BRAND</h3>
                                <div className="underline"></div>
                                <a href="/">Read our story</a>
                            </div>
                        </div>
                        <div className="col l4 m6 s12">
                            <img loading="lazy" alt="pict" src={require("./images/about/about-2.jpg")}/>
                            <div className="content">
                                <h2>Hand Crafted</h2>
                                <h3>PRODUCTS</h3>
                                <div className="underline"></div>
                                <a href="/">About our leather</a>
                            </div>
                        </div>
                        <div className="col l4 m6 s12">
                            <img loading="lazy" alt="pict" src={require("./images/about/about-3.jpg")}/>
                            <div className="content">
                                <h2>Created in the</h2>
                                <h3>USA</h3>
                                <div className="underline"></div>
                                <a href="/">Read our story</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="instagram">
                    <div className="container">
                        <h1 className="title">FOLLOW <br/> ADALENE ON INSTAGRAM</h1>
                        <a href="/" className="description">@adaleneshop</a>
                        <div className="instagram-photos swiper-container">
                            <div className="swiper-wrapper">
                                <a href="/" className="swiper-slide">
                                    <img loading="lazy" alt="pict" src="https://dummyimage.com/200x200/000/fff"/>
                                </a>
                                <a href="/" className="swiper-slide">
                                    <img loading="lazy" alt="pict" src="https://dummyimage.com/200x200/000/fff"/>
                                </a>
                                <a href="/" className="swiper-slide">
                                    <img loading="lazy" alt="pict" src="https://dummyimage.com/200x200/000/fff"/>
                                </a>
                                <a href="/" className="swiper-slide">
                                    <img loading="lazy" alt="pict" src="https://dummyimage.com/200x200/000/fff"/>
                                </a>
                                <a href="/" className="swiper-slide">
                                    <img loading="lazy" alt="pict" src="https://dummyimage.com/200x200/000/fff"/>
                                </a>
                                <a href="/" className="swiper-slide">
                                    <img loading="lazy" alt="pict" src="https://dummyimage.com/200x200/000/fff"/>
                                </a>
                            </div>
                        </div>
                        <div className="features row">
                            <div className="col l4 m4 s12">
                                <div className="upperline"></div>
                                <h3>Worldwide shipping</h3>
                            </div>
                            <div className="col l4 m4 s12">
                                <div className="upperline"></div>
                                <h3>Easy 30 day returns</h3>
                            </div>
                            <div className="col l4 m4 s12">
                                <div className="upperline"></div>
                                <h3>12 month warranty</h3>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
    componentDidMount(){
        M.Parallax.init($('.parallax'));
        navbarIntersecting.observe($('.best-sellers'));
        new Swiper('.best-sellers__items', {
        speed: 400,
        direction: 'horizontal',
        loop: true,
        navigation: {
            prevEl: '.fa-chevron-left',
            nextEl: '.fa-chevron-right'
        },
        breakpoints: {
            320: {
            slidesPerView: 1
            },
            640: {
            slidesPerView: 2
            },
            800: {
            slidesPerView: 3
            },
            1200: {
            slidesPerView: 4
            }
        }
        })
        new Swiper('.instagram-photos', {
        speed: 400,
        loop: true,
        direction: 'horizontal',
        breakpoints: {
            320: {
            slidesPerView: 2
            },
            640: {
            slidesPerView: 3
            },
            800: {
            slidesPerView: 4
            },
            1200: {
            slidesPerView: 5
            }
        }
        })
    }
}
export default Homepage;