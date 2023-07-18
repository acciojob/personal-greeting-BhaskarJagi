
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {

  let [name, setName] = useState("")
  return (
    <div>
        <label for="name">Enter your name: </label>
        <input type="text" className="name" onChange={(event)=>setName(event.target.value)}/>
        {
          name && <p>Hello {name}! </p>
        }
    </div>
  )
}

export default App
