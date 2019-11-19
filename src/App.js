import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FaMinus, FaPlus } from 'react-icons/fa'

const App = () => {
  const [minutes, setMinutes] = React.useState(5)
  const [error, setError] = React.useState(null)

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
              Oh boy...  an error!
          </marquee>
        )}
      </div>
    </div>
  );
}

export default App;
