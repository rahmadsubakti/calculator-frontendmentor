import { useContext } from 'react';

import { ThemeContext, ThemeSwitchContext } from 'components/MainContext';

import './_ThemeSwitcher.scss';

const ThemeSwitcher = () => {
  let theme = useContext(ThemeContext);
  let handleClick = useContext(ThemeSwitchContext);
  theme = " switch-theme" + theme;

  return (
    <div className={"theme-switch" + theme}>
      <input type="radio" name="theme" value="1" id="" onClick={handleClick} />
      <input type="radio" name="theme" value="2" id="" onClick={handleClick} />
      <input type="radio" name="theme" value="3" id="" onClick={handleClick} />
      <span className="toggle"></span>
    </div>
  )
}

export default ThemeSwitcher;