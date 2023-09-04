import React from "react";
import "./App.css"
import Offers from "./components/offers/offers";
import Comment from "./components/comment/comment";
import Help from "./components/help/help";
import MyGallery from "./components/my-gallery/my-gallery";
import ScrollParallax from "./components/abstract/scroll-parallax/scroll-parallax";
import Footer from "./components/footer/footer";

function App() {
    return (
        <div className="main">
            <Offers />
            <MyGallery />
            <Comment />
            <Help />
            <Footer />
        </div>
    );
}

export default App;
