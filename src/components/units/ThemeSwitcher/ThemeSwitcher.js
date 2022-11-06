import { useContext } from 'react';

import { ThemeContext, ThemeSwitchContext } from 'components/MainContext';

import './_ThemeSwitcher.scss';

const ThemeSwitcher = () => {
  const theme = useContext(ThemeContext);
  let handleClick = useContext(ThemeSwitchContext);
  const currentTheme = " switch-theme" + theme;

  return (
    <div className={"theme-switch" + currentTheme}>
      <input type="radio" name="theme" value="1" id="" onClick={handleClick} defaultChecked={theme==="1"} />
      <input type="radio" name="theme" value="2" id="" onClick={handleClick} defaultChecked={theme==="2"} />
      <input type="radio" name="theme" value="3" id="" onClick={handleClick} defaultChecked={theme==="3"} />
      <span className="toggle"></span>
    </div>
  )
}

export default ThemeSwitcher;