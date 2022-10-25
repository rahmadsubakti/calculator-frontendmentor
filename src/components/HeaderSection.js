import { useContext } from "react";

import { ThemeContext } from "./MainContext";
import { ThemeSwitcher } from "./units";

export const HeaderCalcSection = () => {
  let theme = useContext(ThemeContext);
  theme = "header-calc-theme" + theme;
  return (
    <section className={"header-calc " + theme}>
      <h1>calc</h1>
      <div className="theme-switcher-container">
        <p>THEME</p>
        <div className="switcher-container">
          <div className="type-theme">
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </div>
          <ThemeSwitcher />
        </div>
      </div>
    </section>
  )
}