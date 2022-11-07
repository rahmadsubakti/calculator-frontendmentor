import { useContext } from "react";

import { ThemeContext } from "components/MainContext";

import "./_Display.scss"

const Display = ({value, operator}) => {
  let theme = useContext(ThemeContext);
  let className = " display-theme" + theme;

  const opSymbol = {
    "add": "+",
    "sub": "-",
    "mlp": "x",
    "div": "/"
  }

  if (value === "") {
    value = 0
  } else {
    value = parseFloat(value).toLocaleString('en-US');
  }

  return (
    <div className={"display" + className}>
      <p>{opSymbol[operator]}</p>
      <h1>{value}</h1>
    </div>
  )
}

export default Display;