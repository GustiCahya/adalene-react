import React, {Component} from 'react';
import $ from 'utils/selector';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import './story.styles.scss';
import navbarIntersecting from 'utils/navbarIntersecting';

class Story extends Component{
    render(){
        return(
            <main>
                <section className="story-page">
                    <h1>OUR STORY</h1>
                    <div className="story-page__content">
                        <div className="description">
                            <div className="content">
                                <h1>THE BRAND</h1>
                                <div className="underline"></div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ex debitis excepturi ratione? Repudiandae velit totam eum voluptas.</p>
                                <p>Molestiae ipsam vero inventore soluta sequi corrupti, dolorem sed deleniti vel voluptatibus velit non dignissimos.</p>
                            </div>
                        </div>
                        <div className="photo parallax-container">
                            <div className="parallax"><img alt="jacket" src={require("./images/story/jacket.jpg")} /></div>
                        </div>
                        <div className="photo parallax-container">
                            <div className="parallax"><img alt="designed" src={require("./images/story/designer.jpg")} /></div>
                        </div>
                        <div className="description">
                            <div className="content">
                                <h1>THE DESIGNERS</h1>
                                <div className="underline"></div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sit facilis vero dolore exercitationem aperiam voluptas cumque iste natus temporibus, iure, repudiandae alias fugiat rerum.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
    componentDidMount(){
        M.Parallax.init($('.parallax'));
        navbarIntersecting.observe($('.story-page__content'));
    }
}

export default Story;