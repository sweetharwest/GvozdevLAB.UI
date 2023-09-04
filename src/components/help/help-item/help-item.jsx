import React, {useState} from 'react';
import './help-item.css'

function HelpItem ({title, description, advantages, cost}) {
    const [visibility, setVisibility] = useState(0);

    return (
        <div className={"help-item"}>
            <button 
                type={"button"} 
                onClick={() => setVisibility((visibility + 1) % 2)} 
                className={visibility ? "help-item-title-v" : "help-item-title"}>
                {title}
            </button>
            <div className={visibility ? 'visible-block' : 'invisible-block'}>
                <div className={"help-item-description"}>{description}</div>
                {advantages.map((a, id) => (
                    <li key={id} className={"help-item-advantage-li"}>
                        <span className={"help-item-advantage"}>{a}</span>
                    </li>
                ))}
                <div className={"help-item-cost"}>{"Стоимость " + cost + " ₽"}</div>
            </div>
        </div>
    )
}

export default HelpItem;
