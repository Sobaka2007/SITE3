import "./reset.css"
import Header from "./header"
import Color from "./color"
import Characteristics from "./Characteristics"
import Video from "./Video"
import Contact from "./Contact"
import Price from "./Price"
import react,{useState} from "react"

function App() {
  const [active, setActive] = useState(2)

  return (
    <div className="App">
      <Header setActive={setActive} active={active}/> 

      { active === 0 && <Color />}
      { active === 1 && <Characteristics />}
      { active === 2 && <Video />}
      { active === 3 && <Price />}
      { active === 4 && <Contact />} 
    </div>
  );
}

export default App;
