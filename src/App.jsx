import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

import Play from './Play'
import Play2 from './Play2'

import { FaMinus, FaPlus } from 'react-icons/fa'

const RenderFromComponent = () => {
  calls = -1
  ReactDOM.render(<App />, document.getElementById('root'));
}

const states = []
let calls = -1

// Practice implementation of useState to understand the basics of the React impl.
const useState = (defaultValue) => {
  const callId = ++calls
  
  if (states[callId]) {
    return states[callId]
  }

  const setValue = (newValue) => {
    states[callId][0] = newValue

    RenderFromComponent()
  }

  const tuple = [defaultValue, setValue]
  states[callId] = tuple
  return tuple
}



const App = () => {
  const [minutes, setMinutes] = useState(5)
  const [error, setError] = useState(null)

  const handleAdd = () => {
    if (minutes < 9) {
      setMinutes(minutes + 1)
      setError(null)
    } else {
      setError("Less than 10 please.")
    }
  }

  const handleSubtract = () => {
    if (minutes > 1) {
      setMinutes(minutes - 1)
      setError(null)
    } else {
      setError("Greater than zero please.")
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
        <button
          onClick={handleSubtract}
          type="button"
          className="icon_button Minutes_button"
        >
          <FaMinus aria-label="Add"  />
        </button>
      </div>
      <div className="Minutes_label" htmlFor="minutes">Minutes {minutes}</div>
      <div>
        <button
          onClick={handleAdd}
          type="button"
          className="icon_button Minutes_button"
        >
          <FaPlus aria-label="Minus" />
        </button>
      </div>
      <div style={{ textAlign: "center" }}>
        { error && (
          <marquee>
            <p>
              {error} {" "}
              <span role="img" aria-label="Oh boy...">
              🐬
              </span>
              <br />
              <button onClick={() => {setError(null)}}>dismiss</button>
            </p>
          </marquee>
        )}
      </div>
      <Play />
      <Play2 />
    </div>
  );
}

export default App;
