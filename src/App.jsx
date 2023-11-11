import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [casa, setCasa] = useState("Casa amarilla");
  const [alumno, setAlumno] = useState("Daniel");
  const [alumnos, setAlumnos] = useState([1,2,3,4]);

  const eventoClick = () =>{
    setCount((count) => count + 1);
    setAlumno("Javier");
    setAlumnos([
      "Javier",
      "Jorge",
      "Diana"
    ]);
  
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
        <button onClick={() => eventoClick()}>
          el valor de count es: {count}
        </button>
        <p>
          {casa} Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <p>{alumno}</p>
        <code>

{alumnos.map((alumno)=><p>{alumno}</p>)}

</code>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
