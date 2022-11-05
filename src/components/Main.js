import { useState, useReducer, useRef } from 'react';

//import { ThemeSwitcher } from './units';
import KeyPadSection from './KeyPadSection'; 
import { Display } from './units';
import { HeaderCalcSection } from './HeaderSection';

import { ThemeContext, ThemeSwitchContext, handleNumberContext, handleInputContext } from './MainContext';
import { ThemeSwitcher } from './units';

import './_Main.scss';

/*const inputReducer = (dispVal, action) => {
  switch (action.type) {
    case 'del':
      return dispVal.slice(0, dispVal.length-1);
    case 'reset':
      return "";
    case 'number':
      let v;
      if (action.signal.current) {
        action.signal.current = null;
        //console.log(action.signal.current);
        //console.log(action.value);
        v = action.value;
        console.log(v);
      }
      console.log(v);
      return v;
  }
}

const FMain = () => {
  const [theme, setTheme] = useState("1");
  const [dispVal, dispValDispatch] = useReducer(inputReducer, "");
  //const [dispVal, setDispVal] = useState("");
  const [operator, setOperator] = useState("");

  const signalRef = useRef(null); // for when operator is present

  const handleTheme = e => {
    const value = e.target.value;
    setTheme(value);
  }

  /*const getNumber = e => {
    if (signalRef.current) {
      signalRef.current = null;
      console.log(signalRef.current);
      setDispVal(e.target.value);
    } else {
      console.log('concat number');
      setDispVal(dispVal.concat(e.target.value));
    }
  }

  const handleOperation = () => {
    signalRef.current = "y";
    console.log(signalRef.current);
  }
  
  /*const handleOperation = e => {
    let value = parseFloat(dispVal);
    if (operator === "") {
      setTotal(total => value);
      setOperator(operator => "+")
    } else {
      value += total;
      setTotal(total => value);
      dispValDispatch({type: 'idk', value:value});
    }
    //let res;
    if (operation === "") {
      setTotal(total => dispVal);
      setOperation(operation => e.target.value);
    } else {
      if (e.target.value == "+") {
        value += total;
        console.log(value);
        setTotal(total => value);
        dispValDispatch({type: 'idk', value: value})
      }
    }
  }

  return (
    <ThemeSwitchContext.Provider value={handleTheme}>
      <ThemeContext.Provider value={theme}>
        <main className={"main-theme" + theme}>
          <HeaderCalcSection />
          <Display value={dispVal} />
          <handleInputContext.Provider value={dispValDispatch}>
            <KeyPadSection handleOperation={handleOperation} signalRef={signalRef}/>
          </handleInputContext.Provider>
        </main>
      </ThemeContext.Provider>
    </ThemeSwitchContext.Provider>
  )
}*/

const Main = () => {
  const [theme, setTheme] = useState("1");
  const [dispVal, setDispVal] = useState("");
  const [operator, setOperator] = useState("");

  const signalRef = useRef(null); // for when operator is present

  const handleTheme = e => {
    const value = e.target.value;
    setTheme(value);
  }

  const handleDel = () => {
    const newVal = dispVal.slice(0, dispVal.length-1);
    setDispVal(newVal);
  }

  const handleReset = () => {
    setDispVal("");
  }

  const getNumber = e => {
    if (signalRef.current) {
      signalRef.current = null;
      setDispVal(e.target.value);
    } else {
      setDispVal(dispVal.concat(e.target.value));
    }
  }

  const handleOperation = () => {
    signalRef.current = "y";
  }
  
  /*const handleOperation = e => {
    let value = parseFloat(dispVal);
    if (operator === "") {
      setTotal(total => value);
      setOperator(operator => "+")
    } else {
      value += total;
      setTotal(total => value);
      dispValDispatch({type: 'idk', value:value});
    }
    //let res;
    if (operation === "") {
      setTotal(total => dispVal);
      setOperation(operation => e.target.value);
    } else {
      if (e.target.value == "+") {
        value += total;
        console.log(value);
        setTotal(total => value);
        dispValDispatch({type: 'idk', value: value})
      }
    }
  }*/

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
          <Display value={dispVal} />
          <handleInputContext.Provider value={handleInput}>
            <KeyPadSection signalRef={signalRef}/>
          </handleInputContext.Provider>
        </main>
      </ThemeContext.Provider>
    </ThemeSwitchContext.Provider>
  )
}


export default Main;