import React from 'react';
import './main-photo.css'

function MainPhoto ({currentPhoto}) {
    return (
        <div className={"main-photo-container"}>
            <img className={"main-photo-content"} src={currentPhoto.path} alt={"current"} />
        </div>
    )
}

export default MainPhoto;