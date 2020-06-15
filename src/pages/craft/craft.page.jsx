import React, {Component} from 'react';
import $ from 'utils/selector';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import './craft.styles.scss';
import navbarIntersecting from 'utils/navbarIntersecting';

class Craft extends Component{
    render(){
        return (
            <main>
                <section className="craft-page">
                    <h1>THE PROCESS</h1>
                    <div className="craft-page__content">
                        <div className="description">
                            <div className="content">
                                <h1>DESIGN</h1>
                                <div className="underline"></div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ex debitis excepturi ratione? Repudiandae velit totam eum voluptas.</p>
                                <p>Molestiae ipsam vero inventore soluta sequi corrupti, dolorem sed deleniti vel voluptatibus velit non dignissimos.</p>
                            </div>
                        </div>
                        <div className="photo parallax-container">
                            <div className="parallax"><img alt="sketch" src={require("./images/craft/sketch.jpg")} /></div>
                        </div>
                        <div className="photo parallax-container">
                            <div className="parallax"><img alt="fabric" src={require("./images/craft/fabrics.jpg")} /></div>
                        </div>
                        <div className="description">
                            <div className="content">
                                <h1>SELECTION</h1>
                                <div className="underline"></div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sit facilis vero dolore exercitationem aperiam voluptas cumque iste natus temporibus, iure, repudiandae alias fugiat rerum.</p>
                            </div>
                        </div>
                        <div className="description">
                            <div className="content">
                                <h1>CRAFTSMANSHIP</h1>
                                <div className="underline"></div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sit facilis vero dolore exercitationem aperiam voluptas cumque iste natus temporibus, iure, repudiandae alias fugiat rerum.</p>
                            </div>
                        </div>
                        <div className="photo parallax-container">
                            <div className="parallax"><img alt="boxes" src={require("./images/craft/boxes.jpg")} /></div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
    componentDidMount(){
        M.Parallax.init($('.parallax'));
        navbarIntersecting.observe($('.craft-page__content'));
    }
}

export default Craft;