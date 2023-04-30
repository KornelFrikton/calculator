import React from 'react';
import Button from '../button/button';
import "../keyboard/keyboard.css"

function Keyboard({handleClickType, button, font}) {

    const buttons = [
        "C", "MS", "MR", "MC",
        "%", "x²", "√x", "/",
        7, 8, 9, "X",
        4, 5, 6, "-",
        1, 2, 3, "+",
        "+-", 0 , ".", "=",
      ];

    return (  
        <div className="keyboard">
            {buttons.map((but, i) => 
            <Button 
            key={i}
            className={"but" + but}
            value={but}
            handleClick = {handleClickType}
            font={font}
            button={button}
            />)}
        </div>
    );
}

export default Keyboard;