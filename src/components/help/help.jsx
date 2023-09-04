import React from 'react';
import './help.css'

import HelpItem from "./help-item/help-item";

function Help () {
    
    return (
        <div className={"help-container"}>
            <HelpItem 
                title={"Инфографика"}
                description={"Визуфльный ряд, объясняющий процесс, явление, схему и концепцию."}
                advantages={["2D анимация", "Закадровый голос", "Музыкальное оформление", "Хронометраж: до 90 секунд"]}
                cost={"20 000"} 
            />
            <HelpItem
                title={"Подкасты"}
                description={"Визуфльный ряд, объясняющий процесс, явление, схему и концепцию."}
                advantages={["2D анимация", "Закадровый голос", "Музыкальное оформление", "Хронометраж: до 90 секунд"]}
                cost={"100 000"} 
            />
            <HelpItem
                title={"Презентация"}
                description={"Визуфльный ряд, объясняющий процесс, явление, схему и концепцию."}
                advantages={["2D анимация", "Закадровый голос", "Музыкальное оформление", "Хронометраж: до 90 секунд"]}
                cost={"100 000"}
            />
        </div>
    )
}

export default Help;
