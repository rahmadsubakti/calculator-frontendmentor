import { useState } from 'react';

//import { ThemeSwitcher } from './units';
import { KeyPadSection } from './KeyPadSection'; 
import { Display } from './units';

import { ThemeContext, ThemeSwitchContext } from './MainContext';
import { ThemeSwitcher } from './units';

import './_Main.scss';

const Main = () => {
  let [theme, setTheme] = useState("1");

  const handleTheme = e => {
    const value = e.target.value;
    setTheme(value);
  }

  return (
    <ThemeSwitchContext.Provider value={handleTheme}>
      <ThemeContext.Provider value={theme}>
        <main>
          <ThemeSwitcher />
          <Display />
        </main>
      </ThemeContext.Provider>
    </ThemeSwitchContext.Provider>
  )
}

export default Main;