import * as React from "react"
import { useEffect, useState } from "react"
import balls from "../../images/offers/animation/balls.png";
import clouds from "../../images/offers/animation/clouds.jpeg";
import "./offers.css"
import Offers from "./offers";

function Parallax() {
    const [offset, setOffset] = useState(0)

    useEffect(() => {
        function handleScroll() {
            setOffset(window.pageYOffset)
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <div className="App">
            <section className="hero">
                <img
                    src={balls}
                    alt="balls"
                    className="front"
                    style={{
                        transform: `translateY(${-offset * 0.3}px) translateX(${Math.sin(offset/200)*200}px) rotate(${Math.sin(offset/200)*20}deg)`,
                    }}
                />
                <img
                    src={clouds}
                    alt="clouds"
                    className="back"
                    style={{
                        transform: `translateY(${offset * 0.3}px)`,
                    }}
                />
            </section>
        </div>
    )
}

export default Parallax;