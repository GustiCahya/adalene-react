import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './footer.styles.scss';

class Footer extends Component {
    render(){
        return(
            <footer>
                <section className="contact">
                    <div className="row">
                        <div className="title col s12 m3 l3">
                            <h1><a href="/">adalene.</a></h1>
                        </div>
                        <div className="links col s12 m2 l2">
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/">Shop All</a></li>
                                <li><a href="/">Our Story</a></li>
                                <li><a href="/">Our Craft</a></li>
                                <li><a href="/">Contact</a></li>
                            </ul>
                        </div>
                        <div className="links col s12 m2 l2">
                            <ul>
                                <li><a href="/">FAQ</a></li>
                                <li><a href="/">Shipping & Returns</a></li>
                                <li><a href="/">Store Policy</a></li>
                                <li><a href="/">Payment Methods</a></li>
                                <li><a href="/">Stockists</a></li>
                            </ul>
                        </div>
                        <div className="links col s12 m2 l2">
                            <ul>
                                <li><a href="/">Facebook</a></li>
                                <li><a href="/">Instagram</a></li>
                                <li><a href="/">Twitter</a></li>
                                <li><a href="/">Pinterest</a></li>
                            </ul>
                        </div>
                        <div className="emailing col s12 m3 l3">
                            <form action="/">
                                <h1>JOIN US!</h1>
                                <div className="input-field">
                                    <input type="email" id="email" className="validate"/>
                                    <label htmlFor="email">Email</label>
                                    <button className="btn waves-effect waves-orange transparent adalene-effect-reverse">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
                <section className="copyright">
                    <p>&copy;2020 adalene, special marketplace.</p>
                </section>
            </footer>
        )
    }
}

export default Footer;