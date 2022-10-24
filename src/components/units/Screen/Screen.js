import "./_Screen.scss"

const Screen = ({className}) => {
  className = className ? " " + className : "";
  return (
    <div className={"screen" + className}>
      <h1>399,981</h1>
    </div>
  )
}

export default Screen;