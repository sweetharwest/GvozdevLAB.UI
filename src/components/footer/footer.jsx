import React from 'react';
import './footer.css'

import tg from "../../images/footer/telegram.png"
import vk from "../../images/footer/vk.png"

function Footer () {

    return (
        <div className={"footer-container"}>
            <div className={"footer-phone"}>
                8 888 888 88 88
            </div>
            <div className={"footer-address"}>
                Москва, Юности 15
            </div>
            <img src={vk} className={"footer-vk"} alt={"vk-icon"}/>
            <img src={tg} className={"footer-tg"} alt={"tg-icon"}/>
        </div>
    )
}

export default Footer;
