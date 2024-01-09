import { useState } from "react";
import "./App.css";
import Accordion from "./components/Accordion/Accordion";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="AppContainer">
      <Accordion />
    </div>
  );
}

export default App;
