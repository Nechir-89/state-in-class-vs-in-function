
import { useState } from "react"

function Counter() {
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    setCounter(prevState => prevState + 1)
  }
  return (
    <section>
      {counter}
      <button onClick={handleClick}>Increament</button>
    </section>
  )
}

export default Counter;



