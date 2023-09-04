import React from 'react';
import './white-noise.css'
function WhiteNoise ({isPlay}) {
    
    return (
        <div className={isPlay ? "white-noise-container-play" : "white-noise-container"}>
            <div className={"white-noise"}>
                
            </div>
        </div>
    )
}

export default WhiteNoise;
