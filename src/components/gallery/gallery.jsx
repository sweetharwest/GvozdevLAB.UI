import React, {useState} from 'react';
import './gallery.css'

import MainPhoto from "./main-photo/main-photo";
import Navigation from "./navigation/navigation";
import PreviewGallery from "./preview-gallery/preview-gallery";
import WhiteNoize from "./white-noize/white-noize";
import Title from "./title/title";

import photo1 from "../../images/gallery/photos/1.jpg"
import photo2 from "../../images/gallery/photos/2.jpg"
import photo3 from "../../images/gallery/photos/3.jpg"
import photo4 from "../../images/gallery/photos/4.jpg"
import photo5 from "../../images/gallery/photos/5.jpg"
import photo6 from "../../images/gallery/photos/6.jpg"
import photo7 from "../../images/gallery/photos/7.jpg"

function Gallery () {
    
    const photos = [
        {id: 1, path: photo1},
        {id: 2, path: photo2},
        {id: 3, path: photo3},
        {id: 4, path: photo4},
        {id: 5, path: photo5},
        {id: 6, path: photo6},
        {id: 7, path: photo7},
    ]
    
    const [indexActivePhoto, setIndexActivePhoto] = useState(0);
    const activePhoto = photos[indexActivePhoto];
    const prevPhoto = photos[indexActivePhoto - 1];
    const nextPhoto = photos[indexActivePhoto + 1];
    
    
    return (
        <div className={"gallery"}>
            <Title />
            <MainPhoto 
                currentPhoto={activePhoto}
            />
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
            <PreviewGallery 
                activePhotoIndex={indexActivePhoto}
                photos={photos}
                setNewPhoto={setIndexActivePhoto}
            />
            <WhiteNoize />
        </div>
    )
}

export default Gallery;
