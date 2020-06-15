import React, { Component } from "react";
import $ from 'utils/selector';
import M from 'materialize-css';
import './login.styles.scss';
import { signInWithGoogle, auth } from "../../firebase/firebase.utils";

class Login extends Component {
    state = {
        email: '',
        password: '',
        confirmPassword: '',
        isLogin : true,
        errEmail: '',
        errPassword: '',
        errCPassword: ''
    }

    handleLogin = (event) => {
        event.preventDefault();
        const {email, password} = this.state;

        auth.signInWithEmailAndPassword(
            email,
            password
        ).then(() => {
            M.toast({html: 'Log in succeeded!', classes:'teal darken-2'});
            this.setState({email: '', password: ''});
        }).catch((err) => {
            if(err.code.match(/email/g)){
                this.setState({errEmail: err.message})
            }else if(err.code.match(/password/g)){
                this.setState({errPassword: err.message})
            }else{
                alert(err.message);
            }
        })

    }
    handleRegister = (event) => {
        event.preventDefault();
        const {email, password, confirmPassword} = this.state;

        if(password !== confirmPassword) {
            this.setState({errPassword: "Password don't match!", errCPassword: "Password don't match!"});
            return;
        }

        auth.createUserWithEmailAndPassword(
            email,
            password
        ).then(() => {
            M.toast({html: 'Register succeeded!', classes:'teal darken-2'});
            this.setState({
                email: '',
                password: '',
                confirmPassword: ''
            });
        }).catch((err) => {
            if(err.code.match(/email/g)){
                this.setState({errEmail: err.message});
            }else if(err.code.match(/password/g)){
                this.setState({errPassword: err.message, errCPassword: err.message});
            }else{
                alert(err.message);
            }
        });

    }
    handleLoginWithGoogle = () => {
        signInWithGoogle().then(() =>  M.toast({html: 'Log in succeeded!', classes:'teal darken-2'}))
    }
    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({ [name]: value });
    }
    render(){
        const { isLogin, errEmail, errPassword, errCPassword } = this.state;
        return(
            <li>
                <a href="#modalLogin" className="login modal-trigger">Log in</a>
                <div id="modalLogin" className="login_modal modal">
                    <div className="modal-content">
                        <h4>
                            {   (isLogin)
                                ? "Login"
                                : "Register" }
                        </h4>
                        <form className="form-login" onSubmit={(event => (isLogin) ? this.handleLogin(event) : this.handleRegister(event))}>
                            <div className="input-field">
                                <input 
                                    id="email_account" 
                                    name="email"
                                    type="email" 
                                    onChange={this.handleChange} 
                                    className="validate"/>
                                <label htmlFor="email_account">Email</label>
                                {
                                    errEmail ? <span className="helper-text">{errEmail}</span> : ''
                                }
                            </div>
                            <div className="input-field">
                                <input 
                                    id="password_account" 
                                    name="password"
                                    type="password" 
                                    onChange={this.handleChange} 
                                    className="validate"/>
                                {
                                    errPassword ? <span className="helper-text">{errPassword}</span> : ''
                                }
                                <label htmlFor="password_account">Password</label>
                            </div>
                            {
                                (isLogin) 
                                ? '' 
                                : (
                                    <div className="input-field">
                                        <input 
                                            id="password_account_confirm" 
                                            name="confirmPassword"
                                            type="password"
                                            onChange={this.handleChange} 
                                            className="validate"/>
                                        <label htmlFor="password_account_confirm">Password Confirm</label>
                                        {
                                            errCPassword ? <span className="helper-text">{errCPassword}</span> : ''
                                        }
                                    </div>
                                ) 
                            }
                            <button className="submit btn waves-effect waves-orange transparent adalene-effect-reverse">Submit</button>
                            <button onClick={this.handleLoginWithGoogle} className="btn red">
                                <i className="fab fa-google"></i> Login with google
                            </button>
                            <a className="register-link" 
                                onClick={(event) => {
                                    event.preventDefault();
                                    this.setState({isLogin: !isLogin});
                                }} 
                            href="/">
                                {
                                    (isLogin)
                                    ? "Don't have an account yet ?"
                                    : "Already have an account ?"
                                }
                            </a>
                        </form>
                    </div>
                </div>
            </li>
        )
    }
    componentDidMount(){
        M.Modal.init($('.modal'));
    }
    componentWillUnmount(){
        this.handleLogin = null;
        this.handleRegister = null;
    }
}

export default Login;