import { useState } from 'react';

//import { ThemeSwitcher } from './units';
import { KeyPadSection } from './KeyPadSection'; 
import { Display } from './units';
import { HeaderCalcSection } from './HeaderSection';

import { ThemeContext, ThemeSwitchContext, handleNumberContext } from './MainContext';
import { ThemeSwitcher } from './units';

import './_Main.scss';

const Main = () => {
  let [theme, setTheme] = useState("1");
  let [dispVal, setDispVal] = useState("");

  const handleTheme = e => {
    const value = e.target.value;
    setTheme(value);
  }
  
  const getNumber = e => {
    const value = e.target.value;
    const prevDisplay = dispVal;
    const newVal = dispVal.concat(value);
    setDispVal(newVal);
  }

  //display is overflow if length of string is over 12

  return (
    <ThemeSwitchContext.Provider value={handleTheme}>
      <ThemeContext.Provider value={theme}>
        <handleNumberContext.Provider value={getNumber}>
          <main className={"main-theme" + theme}>
            <HeaderCalcSection />
            <Display value={dispVal} />
            <KeyPadSection />
          </main>
        </handleNumberContext.Provider>
      </ThemeContext.Provider>
    </ThemeSwitchContext.Provider>
  )
}

export default Main;