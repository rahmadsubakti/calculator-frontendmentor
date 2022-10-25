import { useContext } from "react";

import { ThemeContext } from "components/MainContext";

import "./_Display.scss"

const Display = ({value}) => {
  let theme = useContext(ThemeContext);
  let className = " display-theme" + theme;

  if (value === "") {
    value = 0
  } else {
    value = parseFloat(value).toLocaleString('en-US');
  }

  return (
    <div className={"display" + className}>
      <h1>{value}</h1>
    </div>
  )
}

export default Display;