import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Loader from './components/loader/Loader'

function App() {
const[loading, setLoading] = useState(true);
//{Loading && <Loader/>}
setTimeout(()=>{
  setLoading(false);
}, 3000);  
return (
    <>
    {
    loading ?
    <Loader/> : 
    <>
       <h1>Vite + React sesión 14 </h1>
      <button className='btn btn-primary'> Click </button>
      </>
}
</>
  )
}

export default App
