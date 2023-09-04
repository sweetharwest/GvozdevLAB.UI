import * as React from "react"
import { useEffect, useState, useRef } from "react"
import balls from "../../images/offers/animation/balls.png";
import clouds from "../../images/offers/animation/clouds.jpeg";
import grass from "../../images/offers/animation/grass.png";
import "./offers.css"

function MauseParallax() {
    const [coords, setCoords] = useState({x: 0, y: 0});
    const boxRef = useRef();
    const [x, setX] = useState();
    const [y, setY] = useState();
    
    const getPosition = () => {
        const x = boxRef ? boxRef.current.offsetLeft : 0;
        setX(x);

        const y = boxRef ? boxRef.current.offsetTop : 0;
        setY(y);
    };
    //getPosition();

    useEffect(() => {
        //const rect = boxRef.current.getBoundingClientRect();
        const handleWindowMouseMove = event => {
            if ((event.clientX > (window.innerWidth-1000) / 2) && (event.clientX < window.innerWidth-500))
            {
                setCoords({
                    x: event.clientX,
                    y: event.clientY,
                });
            }
            /*setCoords({
                x: event.clientX,
                y: event.clientY,
            });*/
        };
        window.addEventListener('mousemove', handleWindowMouseMove);

        return () => {
            window.removeEventListener(
                'mousemove',
                handleWindowMouseMove,
            );
        };
    }, []);

    return (
        <div className="App" ref={boxRef}>
            <section className="hero">
            {/*<section className="hero">*/}
                <img
                    src={balls}
                    alt="balls"
                    className="front"
                    style={{
                        transform: `translateY(${coords.y * 0.2 - 400}px) translateX(${coords.x * 0.2 - 200 }px)`,
                    }}
                />
                <img
                    src={grass}
                    alt="balls"
                    className="middle"
                    style={{
                        transform: `translateY(${coords.y * 0.1}px) translateX(${coords.x * 0.1 - 200 }px)`,
                    }}
                />
                <img
                    src={clouds}
                    alt="clouds"
                    className="back"
                    style={{
                        transform: `translateY(${coords.y * 0.05 - 100}px) translateX(${coords.x * 0.05 - 200 }px)`,
                    }}
                />
            </section>
        </div>
    )
}

export default MauseParallax;