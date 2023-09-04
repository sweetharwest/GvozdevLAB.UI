import React from 'react';
import './navigation.css'

function Navigation ({disabledPrev, disabledNext, onPrevClick, onNextClick}) {
    return (
        <div className={"my-navigation-container"}>
            <button className={"my-navigation-button-left"}
                    disabled={disabledPrev}
                    onClick={onPrevClick}
            >
                Previous
            </button>
            <button className={"my-navigation-button-right"}
                    disabled={disabledNext}
                    onClick={onNextClick}
            >
                Next
            </button>
        </div>
    )
}

export default Navigation;