import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const redirectUrl = () => {
    const url =
      "intent://instagram.com/#Intent;scheme=https;package=com.instagram.android;end";

    // window.location.replace(url);
    setCount((count) => count+1)
    window.location.replace("intent://facebook.com/#Intent;scheme=https;package=com.facebook.android;end"); 
    // window.location.replace("animations1://path/"); 
  }
  const inst = () => {
    const url =
      "intent://instagram.com/#Intent;scheme=https;package=com.instagram.android;end";

    // window.location.replace(url);
    window.location.replace(url); 
  }
  const face = () => {
    const url =
      "intent://facebook.com/#Intent;scheme=https;package=com.facebook.android;end";

    // window.location.replace(url);
    window.location.replace(url); 
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={redirectUrl}>
          redirect
        </button>
        <button onClick={inst}>
          inst
        </button>
        <button onClick={face}>
          facebook
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
