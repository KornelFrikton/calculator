import React from "react";
import "../display/display.css";
import { Textfit } from "react-textfit";

function Display({ input, result, fontType }) {
  const display = Number(input ? input : result).toLocaleString("fr-FR", {
    maximumFractionDigits: 16,
  });

  return (
    <div>
      <Textfit
        mode="multi"
        min={8}
        max={36}
        className="display"
        style={{ fontFamily: fontType }}
      >
        {display}
      </Textfit>
    </div>
  );
}

export default Display;
