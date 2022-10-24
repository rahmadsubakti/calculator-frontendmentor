import { Button } from "./units";

export const KeyPadSection = () => {
  return (
    <section className="keypad-container">
      <Button type="neutral" value="7">7</Button>
      <Button type="neutral" value="8">8</Button>
      <Button type="neutral" value="9">9</Button>
      <Button type="secondary" value="del">DEL</Button>
      <Button type="neutral" value="4">4</Button>
      <Button type="neutral" value="5">5</Button>
      <Button type="neutral" value="6">6</Button>
      <Button type="neutral" value="+">+</Button>
      <Button type="neutral" value="1">1</Button>
      <Button type="neutral" value="2">2</Button>
      <Button type="neutral" value="3">3</Button>
      <Button type="neutral" value="-">-</Button>
      <Button type="neutral" value=".">.</Button>
      <Button type="neutral" value="0">0</Button>
      <Button type="neutral" value="/">/</Button>
      <Button type="neutral" value="x">x</Button>
      <Button type="secondary" value="reset">RESET</Button>
      <Button type="primary" value="=">=</Button>
    </section>
  )
}