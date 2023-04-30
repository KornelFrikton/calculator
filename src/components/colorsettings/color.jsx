import React, { useState } from "react";
import { TwitterPicker } from "react-color";
import "../colorsettings/color.css";

function Color(props) {
  const [fontColor, setFontColor] = useState("#000000");
  const [calculatorColor, setCalculatorColor] = useState("#FFFFFF");
  const [buttonColor, setButtonColor] = useState("#78BC61");

  const onChangeFont = (color) => {
    setFontColor(color);
    setTimeout(() => {
      props.onColorSelectFont(color);
    });
  };

  const onChangeCalculator = (color) => {
    setCalculatorColor(color);
    setTimeout(() => {
      props.onColorSelectCalculator(color);
    });
  };

  const onChangeButton = (color) => {
    setButtonColor(color);
    setTimeout(() => {
      props.onColorSelectButton(color);
    });
  };

  return (
    <div className="colorField">
      <div className="colorPoint">
        <h4>Calculator color</h4>
        <TwitterPicker
          color={calculatorColor}
          onChange={onChangeCalculator}
          triangle="hide"
        />
      </div>
      <div className="colorPoint">
        <h4>Button color</h4>
        <TwitterPicker
          color={buttonColor}
          onChange={onChangeButton}
          triangle="hide"
        />
      </div>
      <div className="colorPoint">
        <h4>Font color</h4>
        <TwitterPicker
          color={fontColor}
          onChange={onChangeFont}
          triangle="hide"
        />
      </div>
    </div>
  );
}

export default Color;
