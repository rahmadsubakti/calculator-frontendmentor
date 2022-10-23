import './_Button.scss'

const Button = ({
  className, 
  onClick,
  value, 
  children}) => {
    if (className) {
      className = " " + className;
    } else {
      className = "";
    }
    return <button 
              onClick={onClick}
              value={value}
              className={"btn" + className}
            >
              {children}
            </button>
}

export default Button;