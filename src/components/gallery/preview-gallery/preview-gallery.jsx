import React, {useEffect, useMemo, useRef} from 'react';
import './preview-gallery.css'

function PreviewGallery ({activePhotoIndex, photos, setNewPhoto}) {
    
    const previewContainer = useRef(null);
    
    useEffect(() => {
        if(!previewContainer.current) {
            return;
        }
        previewContainer.current.style.transform = `translate(-${activePhotoIndex * 164}px, 0)`;
    }, [activePhotoIndex]);
    
    return (
        <div className={"previewGallery"}>
            {useMemo(() => (
                <ul ref={previewContainer} className={"previewGalleryTrack"}>
                    {photos.map((photo, id) => (
                        <li key={photo.id}>
                            <button className={"previewGalleryPreview"} onClick={() => setNewPhoto(id)}>
                                <img src={photo.path} alt={"photo-" + photo.id} className={"previewGalleryImage"}/>
                            </button>
                        </li>
                    ))}
                </ul>
            ), [])}
            <div className={"previewGalleryCover"}>
                {activePhotoIndex + 1} / {photos.length}
            </div>
        </div>
    )
}

export default PreviewGallery;