import { ThemeSwitcher } from "./units";

export const HeaderCalcSection = () => {
  return (
    <section className="header-calc">
      <h1>Calc</h1>
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