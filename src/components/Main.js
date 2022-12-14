import { useState, useRef, useEffect } from 'react';

import KeyPadSection from './KeyPadSection'; 
import { Display } from './units';
import { HeaderCalcSection } from './HeaderSection';

import { ThemeContext, ThemeSwitchContext, handleInputContext } from './MainContext';

import './_Main.scss';

const Main = () => {
  const init = {
    dispVal: "",
    operator: "",
    signal: false,
    total: 0,
  }

  const [theme, setTheme] = useState(localStorage.getItem('theme'));
  const [dispVal, setDispVal] = useState(init.dispVal);
  const [operator, setOperator] = useState(init.operator);

  const signalRef = useRef(init.signal); // for when operator is present
  const totalRef = useRef(init.total);

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');
    if (!currentTheme) {
      localStorage.setItem('theme', "1");
    }
  }, [])

  const handleTheme = e => {
    const value = e.target.value;
    localStorage.setItem('theme', value);
    setTheme(value);
  }

  const handleDel = () => {
    const newVal = dispVal.slice(0, dispVal.length-1);
    setDispVal(newVal);
  }

  const handleReset = () => {
    signalRef.current = init.signal;
    totalRef.current = init.total;
    setDispVal(init.dispVal);
    setOperator(init.operator)
  }

  const getNumber = e => {
    // get new input if operator other than '=' is clicked
    if (signalRef.current) {
      signalRef.current = false;
      setDispVal(e.target.value);
    } else {
      setDispVal(dispVal.concat(e.target.value));
    }
  }

  const handleOperation = e => {
    const operatorClicked = e.target.value;
    const val = parseFloat(dispVal);

    // prevent operator from being clicked twice
    if (!signalRef.current) {
      switch(operator) {
        case 'add':
          totalRef.current += val;
          break;
        case 'sub':
          totalRef.current -= val;
          break;
        case 'mlp':
          totalRef.current *= val;
          break;
        case 'div':
          totalRef.current /= val;
          break;
        default:
          totalRef.current = val;
      }
    }

    if (!signalRef.current) {
      // Check if user divide number with zero.
      if (isFinite(totalRef.current)) {
        setDispVal(totalRef.current);
      } else {
        totalRef.current = 'cannot';
      }
    }

    if (operatorClicked === '=' || isNaN(totalRef.current)) {
      if (isNaN(totalRef.current)) {
        setDispVal(totalRef.current);
      }
      totalRef.current = init.total;
      setOperator(init.operator);
    } else {
      setOperator(operatorClicked);
    }

    signalRef.current = true;
  }

  const handleInput = {
    "handleDel" : handleDel,
    "handleReset": handleReset,
    "getNumber": getNumber,
    "handleOperation": handleOperation
  }

  return (
    <ThemeSwitchContext.Provider value={handleTheme}>
      <ThemeContext.Provider value={theme}>
        <main className={"main-theme" + theme}>
          <HeaderCalcSection />
          <Display value={dispVal} operator={operator}/>
          <handleInputContext.Provider value={handleInput}>
            <KeyPadSection signalRef={signalRef}/>
          </handleInputContext.Provider>
        </main>
      </ThemeContext.Provider>
    </ThemeSwitchContext.Provider>
  )
}


export default Main;