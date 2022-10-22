const Button = ({
  className, 
  onClick,
  value, 
  children}) => {
  return (
    <div className={"btn ".concat(className)}>
      <button 
        onClick={onClick}
        value={value}
      >
        {children}
      </button>
    </div>
  )
}

export default Button;