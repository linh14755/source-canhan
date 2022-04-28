import { useState } from "react"
import "./App.css"
import Header from "./components/Header"
import Popup from "./components/Popup"

function App() {
  const [popStatus, setPopStatus] = useState(false)

  return (
    <div className="container">
      <Header onClick={() => setPopStatus(!popStatus)} />
      <Popup onClick={() => setPopStatus(!popStatus)} popStatus={popStatus} />
    </div>
  );
}

export default App
