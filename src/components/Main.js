import { useState } from 'react';

import { ThemeSwitcher } from './units';

import { ThemeContext, ThemeSwitchContext } from './MainContext';

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
        </main>
      </ThemeContext.Provider>
    </ThemeSwitchContext.Provider>
  )
}

export default Main;