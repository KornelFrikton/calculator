import "./App.css";
import Keyboard from "./components/keyboard/keyboard";
import Display from "./components/display/display";
import Color from "./components/colorsettings/color";
import React, { useEffect, useState } from "react";

function App() {
  const [input, setInput] = useState(0);
  const [result, setResult] = useState(0);
  const [lastButton, setLastButton] = useState("");
  const [memory, setMemory] = useState(0);

  const [fontType, setFontType] = useState("Times New Roman");

  const [font, setFont] = useState({ r: 0, g: 0, b: 0, a: 1 });
  const [calculator, setCalculator] = useState({ r: 27, g: 42, b: 65, a: 1 });
  const [button, setButton] = useState({ r: 204, g: 201, b: 220, a: 1 });

  const [settings, setSettings] = useState(false);
  const [buttonName, setButtonName] = useState(true);

  const settingsMenu = settings ? "showMenu" : "hideMenu";
  const buttonText = buttonName ? "Show Settings" : "Hide Settings";

  const handleColorFont = (color) => {
    setFont(color.rgb);
  };

  const handleColorCalculator = (color) => {
    setCalculator(color.rgb);
  };

  const handleColorButton = (color) => {
    setButton(color.rgb);
  };

  const handleSettingsClick = (e) => {
    e.preventDefault();
    setSettings((oldValue) => !oldValue);
    setButtonName((oldValue) => !oldValue);
  };

  const calculate = (a, b) => {
    switch (lastButton) {
      case "":
        if (result === 0) {
          setResult(input);
        }
        break;

      case "X":
        setResult(Number(a) * Number(b));
        break;

      case "+":
        setResult(Number(a) + Number(b));
        break;

      case "-":
        setResult(Number(b) - Number(a));
        break;

      case "/":
        if (Number(a) === 0) {
          alert("Error, you can't divide with 0");
          return setInput(Number(a));
        } else {
          setResult(Number(b) / Number(a));
        }
        break;
    }
    return setInput(0);
  };

  const resetClick = () => {
    setInput(0);
    setResult(0);
    setLastButton("");
  };

  const invert = (a) => {
    return Number(a) * -1;
  };

  const percent = (a) => {
    return a * 0.01;
  };

  const decimal = (a) => {
    if (!a.toString().includes(".")) {
      return a + ".";
    } else return a;
  };

  const square = (a) => {
    return Math.pow(Number(a), 2);
  };

  const sqrt = (a) => {
    if (a >= 0) {
      return Math.sqrt(a);
    } else {
      alert("Error, you can't square root a negative number ");
      return a;
    }
  };

  const handleButtonClick = (e) => {
    const buttonType = e.target.value;
    if (input.toString().length < 15 && input !== 0) {
      setInput(input + buttonType);
    } else if (input.toString().length < 15) {
      setInput(buttonType);
    }

    switch (buttonType) {
      case "C":
        resetClick();
        break;

      case "+":
        setLastButton("+");
        calculate(input, result);
        break;

      case "-":
        setLastButton("-");
        calculate(input, result);
        break;

      case "X":
        setLastButton("X");
        calculate(input, result);
        break;

      case "/":
        setLastButton("/");
        calculate(input, result);
        break;

      case "=":
        setLastButton("");
        calculate(input, result);
        break;

      case "+-":
        if (input === 0) {
          setInput(0);
          setResult(invert(result));
        } else {
          setInput(invert(input));
        }
        break;

      case "%":
        if (input === 0) {
          setInput(0);
          setResult(percent(result));
        } else {
          setInput(percent(input));
        }
        break;

      case ".":
        setInput(decimal(input));
        break;

      case "x²":
        if (lastButton === "" && input === 0) {
          setResult(square(result));
          setInput(0);
        } else {
          setInput(square(input));
        }
        break;

      case "√x":
        if (lastButton === "" && input === 0) {
          setResult(sqrt(result));
          setInput(0);
        } else {
          setInput(sqrt(input));
        }
        break;

      case "MS":
        if (lastButton === "" && result === 0) {
          setInput(Number(input));
          setMemory(Number(input));
        } else {
          setInput(result);
          setMemory(Number(result));
        }
        break;

      case "MC":
        setMemory(0);
        setInput(Number(input));
        break;

      case "MR":
        setInput(memory);
        break;
    }
  };

  useEffect(() => {
    if (input === Infinity || result === Infinity) {
      alert("Congratulations, you have reached the Infinity!");
      return resetClick();
    }
  }, [input, result]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculator</h1>
      </header>
      <div className="main">
        <div className="settings">
          <button onClick={handleSettingsClick}>{buttonText}</button>
          <div className={settingsMenu}>
            <Color
              onColorSelectFont={handleColorFont}
              onColorSelectCalculator={handleColorCalculator}
              onColorSelectButton={handleColorButton}
            />
            <h4>Font type</h4>
            <div className="fontselect">
              <button onClick={() => setFontType("Times New Roman")}>
                <span style={{ fontFamily: "Times New Roman" }}>
                  Font type 1
                </span>
              </button>
              <button onClick={() => setFontType("Verdana")}>
                <span style={{ fontFamily: "Verdana" }}>Font type 2</span>
              </button>
              <button onClick={() => setFontType("Courier New")}>
                <span style={{ fontFamily: "Courier New" }}>Font type 3</span>
              </button>
              <button onClick={() => setFontType("Impact")}>
                <span style={{ fontFamily: "Impact" }}>Font type 4</span>
              </button>
            </div>
          </div>
        </div>
        <div
          className="calculator"
          style={{
            backgroundColor: `rgba(${calculator.r}, ${calculator.g}, ${calculator.b}, ${calculator.a})`,
            color: `rgba(${font.r}, ${font.g}, ${font.b}, ${font.a})`,
          }}
        >
          <Display input={input} result={result} fontType={fontType} />
          <Keyboard
            handleClickType={handleButtonClick}
            button={button}
            font={font}
          />
        </div>
      </div>
    </div>
  );
}

export default App;