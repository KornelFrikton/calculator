import React from "react";
import "../button/button.css";

function Button({ className, value, handleClick, button, font }) {
  return (
    <button
      className={className}
      onClick={handleClick}
      value={value}
      style={{
        backgroundColor: `rgba(${button.r}, ${button.g}, ${button.b}, ${button.a})`,
        color: `rgba(${font.r}, ${font.g}, ${font.b}, ${font.a})`,
      }}
    >
      {value}
    </button>
  );
}

export default Button;
