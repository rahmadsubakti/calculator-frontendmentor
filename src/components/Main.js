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

const divide = (num1, num2) => {
  const result = num1/num2;
  if (!isFinite(result)) {
    throw "Cannot be divided by zero"
  }
  return result;
}

const Main = () => {
  const init = {
    dispVal: "",
    operator: "",
    signal: false,
    total: 0,
  }

  const [theme, setTheme] = useState("1");
  const [dispVal, setDispVal] = useState(init.dispVal);
  const [operator, setOperator] = useState(init.operator);

  const signalRef = useRef(init.signal); // for when operator is present
  const totalRef = useRef(init.total);

  const handleTheme = e => {
    const value = e.target.value;
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
        case '+':
          totalRef.current += val;
          break;
        case '-':
          totalRef.current -= val;
          break;
        case '*':
          totalRef.current *= val;
          break;
        case '/':
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