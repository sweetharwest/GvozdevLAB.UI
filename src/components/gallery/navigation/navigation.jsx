import React from 'react';
import './navigation.css' 

function Navigation ({disabledPrev, disabledNext, onPrevClick, onNextClick}) {
    return (
        <div className={"navigation-container"}>
            <button className={"navigation-button-left"}
                disabled={disabledPrev}
                onClick={onPrevClick}
            >
                Previous
            </button>
            <button className={"navigation-button-right"}
                disabled={disabledNext}
                onClick={onNextClick}
            >
                Next
            </button>
        </div>
    )
}

export default Navigation;