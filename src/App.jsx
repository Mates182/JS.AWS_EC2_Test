import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ec2Logo from './assets/ec2.svg'
import uceLogo from './assets/uce.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://www.uce.edu.ec/" target="_blank">
          <img src={uceLogo} className="logo" alt="UCE logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://aws.amazon.com/es/ec2/" target="_blank">
          <img src={ec2Logo} className="logo" alt="EC2 logo" />
        </a>
      </div>
      <h1>Hello World from AWS EC2!</h1>
      <h2>By: Mateo Pillajo :D</h2>
      <p>This is a test for main branch</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

      </div>
      <p className="read-the-docs">
        Click on any logo to learn more
      </p>
    </>
  )
}

export default App
