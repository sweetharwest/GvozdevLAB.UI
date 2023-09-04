import * as React from 'react';
import '../offers.css';
import img from "../../../images/offers/animation/forest.jpg";
function Graphics () {

    return (
        <div className="offer">
            <div className="offer-description">
                <h1 className={"offer-description-title"}>
                    ДЕЛАЕМ<br />
                    3D ГРАФИКУ
                </h1>
                <h3 className={"offer-description-text"}>
                    Animation is the method by which still images are manipulated to create moving images.
                    In traditional animation, images are drawn or painted by hand on transparent celluloid sheets to be photographed and exhibited on film.
                    Today, many animations are computer animations made with computer-generated imagery (CGI).
                    Stop motion animation, in particular claymation, has continued to exist alongside these other forms.
                </h3>
            </div>
            <div className="offer-image">
                {/*<img src={img} className="graphics-image-img" alt="graphics" />*/}
            </div>
        </div>
    );
}

export default Graphics;
