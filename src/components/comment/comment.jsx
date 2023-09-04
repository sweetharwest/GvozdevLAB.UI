import React from 'react';
import './commet.css'
import ScrollParallax from "../abstract/scroll-parallax/scroll-parallax";
import MouseParallax from "../abstract/mouse-parallax/mouse-parallax";

function Comment () {
    
    return (
        <div className={"comment-container"}>
            <blockquote class="blockquote-8">
                <p>
                    Профессия Охотника опасна и трудна, а перечень поручений крайне широк
                    - от убийства чудовищ до поисков клада. Тем не менее, многие авантюристы 
                    пускаются во все тяжкие в погоне за мечтой стать прославленным Охотником.
                </p>
                <cite>
                    Hunter X hunteR
                </cite>
            </blockquote>
            {/*<ScrollParallax />*/}
            <MouseParallax />
        </div>
    )
}

export default Comment;
