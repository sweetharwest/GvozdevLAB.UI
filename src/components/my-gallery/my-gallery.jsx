import React, {useState} from 'react';
import './my-gallery.css'

import photo1 from "../../images/gallery/photos/1.jpg"
import photo2 from "../../images/gallery/photos/2.jpg"
import photo3 from "../../images/gallery/photos/3.jpg"
import photo4 from "../../images/gallery/photos/4.jpg"
import photo5 from "../../images/gallery/photos/5.jpg"
import photo6 from "../../images/gallery/photos/6.jpg"
import photo7 from "../../images/gallery/photos/7.jpg"
import vd from "../../images/gallery/video/flower.mp4"

import Preview from "./preview/preview";
import Navigation from "./navigation/navigation";
import Player from "./player/player";
import WhiteNoise from "./white-noise/white-noise";

function MyGallery () {

    const photos = [
        {id: 1, path: photo1},
        {id: 2, path: photo2},
        {id: 3, path: photo3},
        {id: 4, path: photo4},
        {id: 5, path: photo5},
        {id: 6, path: photo6},
        {id: 7, path: photo7},
    ]

    const [isPlay, setPlay] = useState(0);
    const [indexActivePhoto, setIndexActivePhoto] = useState(0);
    const activePhoto = photos[indexActivePhoto];
    const prevPhoto = photos[indexActivePhoto - 1];
    const nextPhoto = photos[indexActivePhoto + 1];
    
    return (
        <div className={isPlay ? "my-gallery-container-play" : "my-gallery-container"}>
            <div className={"my-gallery-title-container"}>
                <h1 className={"my-gallery-title"}>ПРИМЕРЫ РАБОТ</h1>
            </div>
            <Navigation
                disabledPrev={!prevPhoto}
                disabledNext={!nextPhoto}
                onPrevClick={() => {
                    setIndexActivePhoto(indexActivePhoto - 1);
                }}
                onNextClick={() => {
                    setIndexActivePhoto(indexActivePhoto + 1);
                }}
            />
            <Preview
                activePhotoIndex={indexActivePhoto}
                photos={photos}
                setNewPhoto={setIndexActivePhoto}
                setPlay={setPlay}
                play={isPlay}
            />
            <WhiteNoise
                isPlay={isPlay}
            />
            <Player 
                isPlay={isPlay} 
                path={activePhoto} 
            />
        </div>
    )
}

export default MyGallery;