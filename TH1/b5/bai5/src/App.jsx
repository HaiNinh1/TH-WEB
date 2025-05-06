import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/Nav/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import ManageUser from "./components/Admin/ManageUser.jsx";



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='container-fluid' >  
      <NavBar />
      <div className='body container'>
      <ManageUser />
      </div>
    </div>
      
    </>
  )
}

export default App
