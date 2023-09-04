import React, {useEffect, useMemo, useRef} from 'react';
import './preview.css'

function Preview ({activePhotoIndex, photos, setNewPhoto, setPlay, play}) {

    const previewContainer = useRef(null);

    useEffect(() => {
        if(!previewContainer.current) {
            return;
        }
        previewContainer.current.style.transform = `translate(-${activePhotoIndex * 270}px, 0)`;
    }, [activePhotoIndex]);

    return (
        <div className={"preview"}>
            {useMemo(() => (
                <ul ref={previewContainer} className={"previewTrack"}>
                    {photos.map((photo, id) => (
                        <li key={photo.id}>
                            <button className={"previewPreview"} onClick={() => setNewPhoto(id)}>
                                <img src={photo.path} alt={"photo-" + photo.id} className={"previewImage"}/>
                            </button>
                        </li>
                    ))}
                </ul>
            ), [])}
            <div className={"previewCover"}>
                <button className={play ? "close-button" : "play-button"} onClick={() => setPlay((play + 1) % 2)}>play</button>
                {/*{activePhotoIndex + 1} / {photos.length}*/}
            </div>
        </div>
    )
}

export default Preview;