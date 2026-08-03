import { useState } from "react"
import ColorChanger from "./Component/ColorChanger"

function App() {

  const [color, setColor] = useState("olive")

  return (
   <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <ColorChanger setColor={setColor} />
    </div>
  )
}

export default App
