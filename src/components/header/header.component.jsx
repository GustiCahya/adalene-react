import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';
import $ from 'utils/selector'
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import './header.styles.scss';
import Login from '../login/login.component';
import Cart from '../cart/cart.component';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.selectors';


class Header extends Component {
    render(){
        const {currentUser} = this.props;
        const {pathname} = this.props.location;
        return(
            <header>
                <nav className="nav-extended white">
                    <div className="nav-wrapper container">
                        <ul className="nav-left left">
                            <li><a href="https://facebook.com"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="https://instagram.com"><i className="fab fa-instagram"></i></a></li>
                            <li><a href="https://twitter.com"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="https://pinterest.com"><i className="fab fa-pinterest"></i></a></li>
                        </ul>
                        <Link to="/" className="brand-logo center">adalene.</Link>
                        <Link to="/" data-target="mobile-demo" className="sidenav-trigger right"><i className="material-icons">menu</i></Link>
                        <ul className="nav-right right">
                            {
                                (currentUser) 
                                ? <li><a href="/" onClick={(event) => {
                                        event.preventDefault();
                                        M.toast({html: 'Account has been logged out!', classes:'red darken-4'});
                                        auth.signOut();
                                    }} className="login">Log out</a></li>
                                : <Login currentUser={currentUser} /> 
                            }
                            <Cart />
                        </ul>
                    </div>
                    <div className="nav-content container hide-on-med-and-down">
                        <div className="tabs tabs-transparent center">
                            <li className={(pathname === "/") ? "tab active" : "tab"}><Link to="/">Home</Link></li>
                            <li className={(pathname === "/shop") ? "tab active" : "tab"}><Link to="/shop">Shop All</Link></li>
                            <li className={(pathname === "/story") ? "tab active" : "tab"}><Link to="/story">Our Story</Link></li>
                            <li className={(pathname === "/craft") ? "tab active" : "tab"}><Link to="/craft">Our Craft</Link></li>
                            <li className={(pathname === "/contact") ? "tab active" : "tab"}><Link to="/contact">Contact</Link></li>
                        </div>
                    </div>
                </nav>
                <ul id="mobile-demo" className="sidenav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shop">Shop All</Link></li>
                    <li><Link to="/story">Our Story</Link></li>
                    <li><Link to="/craft">Our Craft</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </header>
        )
    }
    componentDidMount(){
        M.Sidenav.init($('.sidenav'), {
            edge: 'right'
        });
    }
}

const mapStateToProps = (state) => ({
    currentUser: selectCurrentUser(state)
})

export default withRouter(connect(mapStateToProps, null)(Header));