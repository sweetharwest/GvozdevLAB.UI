import React from 'react';
import './player.css'

function Player ({isPlay, path}) {
    return (
        <div className={isPlay ? "player-container" : "none"}>
            <img className={"player-window"} src={path.path} alt={path.id}/>
            {/*<video controls width="250">
                <source src={path.path} type="video/mp4" />
            </video>*/}
        </div>
    )
}

export default Player;