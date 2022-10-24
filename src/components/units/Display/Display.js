import { useContext } from "react";

import { ThemeContext } from "components/MainContext";

import "./_Display.scss"

const Display = () => {
  let theme = useContext(ThemeContext);
  let className = " display-theme" + theme;
  return (
    <div className={"display" + className}>
      <h1>399,981</h1>
    </div>
  )
}

export default Display;