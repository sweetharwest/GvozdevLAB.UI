import * as React from "react"
import { useEffect, useState } from "react"
import d1 from "../../../images/scroll-parallax/depth-1.png"
import d2 from "../../../images/scroll-parallax/depth-2.png"
import d3 from "../../../images/scroll-parallax/depth-3.png"
import "./scroll-parallax.css"

function ScrollParallax() {
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
        <div className="scroll-parallax">
            <section className="hero">
                <img
                    src={d1}
                    alt="d1"
                    className="front"
                    style={{
                        transform: `translateY(${offset * 0.1 - 200}px)`,
                    }}
                />
                <img
                    src={d2}
                    alt="d2"
                    className="middle"
                    style={{
                        transform: `translateY(${offset * 0.2 - 450}px)`,
                    }}
                />
                <img
                    src={d3}
                    alt="d3"
                    className="back"
                    style={{
                        transform: `translateY(${offset * 0.3 - 600}px)`,
                    }}
                />
            </section>
        </div>
    )
}

export default ScrollParallax;