import { useContext } from "react";

import { ThemeContext, handleInputContext, handleNumberContext } from "./MainContext";

import { Button } from "./units";

/*
const FKeyPadSection = ({handleOperation, signalRef}) => {
  let theme = useContext(ThemeContext);
  theme = " keypad-theme" + theme;
  //const getNumber = useContext(handleNumberContext);

  const inputDispatch = useContext(handleInputContext);

  const getNumber = e => {
    inputDispatch({
      type: 'number',
      value: e.target.value,
      signal: signalRef
    })
  }

  const handleDel = () => {
    inputDispatch({type: 'del'})
  }

  const handleReset = () => {
    inputDispatch({type: 'reset'})
  }

  return (
    <section className={"keypad-container" + theme}>
      <Button type="neutral" value="7" onClick={getNumber}>7</Button>
      <Button type="neutral" value="8" onClick={getNumber}>8</Button>
      <Button type="neutral" value="9" onClick={getNumber}>9</Button>
      <Button type="secondary" value="del" onClick={"handleDel"}>DEL</Button>
      <Button type="neutral" value="4" onClick={getNumber}>4</Button>
      <Button type="neutral" value="5" onClick={getNumber}>5</Button>
      <Button type="neutral" value="6" onClick={getNumber}>6</Button>
      <Button type="neutral" value="+" onClick={handleOperation}>+</Button>
      <Button type="neutral" value="1" onClick={getNumber}>1</Button>
      <Button type="neutral" value="2" onClick={getNumber}>2</Button>
      <Button type="neutral" value="3" onClick={getNumber}>3</Button>
      <Button type="neutral" value="-">-</Button>
      <Button type="neutral" value=".">.</Button>
      <Button type="neutral" value="0" onClick={getNumber}>0</Button>
      <Button type="neutral" value="/">/</Button>
      <Button type="neutral" value="x">x</Button>
      <Button type="secondary" value="reset" onClick={"handleReset"}>RESET</Button>
      <Button type="primary" value="=">=</Button>
    </section>
  )
}*/

const KeyPadSection = () => {
  let theme = useContext(ThemeContext);
  theme = " keypad-theme" + theme;
  
  const {
    handleDel,
    handleReset,
    getNumber,
    handleOperation
  } = useContext(handleInputContext);

  return (
    <section className={"keypad-container" + theme}>
      <Button type="neutral" value="7" onClick={getNumber}>7</Button>
      <Button type="neutral" value="8" onClick={getNumber}>8</Button>
      <Button type="neutral" value="9" onClick={getNumber}>9</Button>
      <Button type="secondary" value="del" onClick={handleDel}>DEL</Button>
      <Button type="neutral" value="4" onClick={getNumber}>4</Button>
      <Button type="neutral" value="5" onClick={getNumber}>5</Button>
      <Button type="neutral" value="6" onClick={getNumber}>6</Button>
      <Button type="neutral" value="+" onClick={handleOperation}>+</Button>
      <Button type="neutral" value="1" onClick={getNumber}>1</Button>
      <Button type="neutral" value="2" onClick={getNumber}>2</Button>
      <Button type="neutral" value="3" onClick={getNumber}>3</Button>
      <Button type="neutral" value="-">-</Button>
      <Button type="neutral" value=".">.</Button>
      <Button type="neutral" value="0" onClick={getNumber}>0</Button>
      <Button type="neutral" value="/">/</Button>
      <Button type="neutral" value="x">x</Button>
      <Button type="secondary" value="reset" onClick={handleReset}>RESET</Button>
      <Button type="primary" value="=">=</Button>
    </section>
  )
}

export default KeyPadSection;