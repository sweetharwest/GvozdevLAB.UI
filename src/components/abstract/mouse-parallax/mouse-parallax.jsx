import * as React from "react"
import { useEffect, useState, useRef } from "react"
import d1 from "../../../images/scroll-parallax/depth-1.png"
import d2 from "../../../images/scroll-parallax/depth-2.png"
import d3 from "../../../images/scroll-parallax/depth-3.png"
import "./mouse-parallax.css"

function MouseParallax() {
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
            /*if ((event.clientX > (window.innerWidth-1000) / 2) && (event.clientX < window.innerWidth-500))
            {
                setCoords({
                    x: event.clientX,
                    y: event.clientY,
                });
            }*/
            setCoords({
                x: event.clientX,
                y: event.clientY,
            });
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
        <div className="mouse-parallax" ref={boxRef}>
            <section className="hero">
                {/*<section className="hero">*/}
                <img
                    src={d1}
                    alt="balls"
                    className="front"
                    style={{
                        transform: `translateY(${coords.y * 0.1 -80}px) translateX(${coords.x * 0.1 - 100}px)`,
                    }}
                />
                <img
                    src={d2}
                    alt="balls"
                    className="middle"
                    style={{
                        transform: `translateY(${coords.y * 0.2 - 100}px) translateX(${coords.x * 0.2 - 150}px)`,
                    }}
                />
                <img
                    src={d3}
                    alt="clouds"
                    className="back"
                    style={{
                        transform: `translateY(${coords.y * 0.3 - 150}px) translateX(${coords.x * 0.3 - 200}px)`,
                    }}
                />
            </section>
        </div>
    )
}

export default MouseParallax;