import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import './contact.styles.scss';
import $ from 'utils/selector';
import navbarIntersecting from "utils/navbarIntersecting";

class Contact extends Component{
    render(){
        return (
            <main>
                <section className="contact-page">
                    <h1>GET IN TOUCH</h1>
                    <div className="contacts">
                        <div className="customer-service container">
                            <h2>CUSTOMER SERVICE</h2>
                            <div className="underline"></div>
                            <div className="row">
                                <div className="col s12 m4">
                                    <h3>Flagship Store</h3>
                                    <p>500 Terry Francois St.</p>
                                    <p>San Francisco, CA 94158</p>
                                </div>
                                <div className="col s12 m4">
                                    <h3>Opening Hours</h3>
                                    <p>Monday-Friday</p>
                                    <p>9:00am - 7:00pm EST</p>
                                </div>
                                <div className="col s12 m4">
                                    <h3>Contact Us</h3>
                                    <p><a href="tel:+1-800-000-0000" style={{color: "black"}}>1-800-000-0000</a></p>
                                    <p><a href="mailto:info@my-domain.com" style={{color: "black"}}>info@my-domain.com</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="inquiries container">
                            <h2>Inquiries</h2>
                            <p>For questions regarding our products and services you can also<br/> contact us by filling out the form below.</p>
                            <form action="#">
                                <div className="row">
                                    <div className="col s12 m6 input-field">
                                        <input id="firstname" type="text"/>
                                        <label htmlFor="firstname">First Name</label>
                                    </div>
                                    <div className="col s12 m6 input-field">
                                        <input id="lastname" type="text"/>
                                        <label htmlFor="lastname">Last Name</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col s12 input-field">
                                        <input id="email" type="email" className="validate"/>
                                        <label htmlFor="email">First Email</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col s12 input-field">
                                        <input id="subject" type="text"/>
                                        <label htmlFor="subject">Subject</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col s12 input-field">
                                        <input id="messages" type="text"/>
                                        <label htmlFor="messages">Type your messages here...</label>
                                    </div>
                                </div>
                                <button className="btn waves-effect waves-orange transparent adalene-effect-reverse">
                                    Submit
                                </button>
                            </form>
                        </div>
                        <div className="stockist container">
                            <h2>STOCKIST</h2>
                            <div className="underline"></div>
                            <div className="row">
                                <div className="col s12 m4">
                                    <p>500 Terry Francois St.</p>
                                    <p>San Francisco, CA 94158</p>
                                    <p>123-456-7890</p>
                                </div>
                                <div className="col s12 m4">
                                    <p>500 Terry Francois St.</p>
                                    <p>San Francisco, CA 94158</p>
                                    <p>123-456-7890</p>
                                </div>
                                <div className="col s12 m4">
                                    <p>500 Terry Francois St.</p>
                                    <p>San Francisco, CA 94158</p>
                                    <p>123-456-7890</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s12 m4">
                                    <p>500 Terry Francois St.</p>
                                    <p>San Francisco, CA 94158</p>
                                    <p>123-456-7890</p>
                                </div>
                                <div className="col s12 m4">
                                    <p>500 Terry Francois St.</p>
                                    <p>San Francisco, CA 94158</p>
                                    <p>123-456-7890</p>
                                </div>
                                <div className="col s12 m4">
                                    <p>500 Terry Francois St.</p>
                                    <p>San Francisco, CA 94158</p>
                                    <p>123-456-7890</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
    componentDidMount(){
        navbarIntersecting.observe($('.inquiries'));
    }
}

export default Contact;