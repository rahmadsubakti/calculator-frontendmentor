import { useContext } from 'react';

import { ThemeContext } from 'components/MainContext';

import './_Button.scss'

const Button = ({
  type, 
  onClick,
  value, 
  children}) => {
    let theme = useContext(ThemeContext);
    theme = " theme" + theme;
    if (type) {
      type = "-" + type;
    } else {
      type = "";
    }

    let className = " btn" + type + theme

    return <button 
              onClick={onClick}
              value={value}
              className={"btn" + className}
            >
              {children}
            </button>
}

export default Button;