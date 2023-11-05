import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Nested/navbar/Navbar'
import Footer from './Nested/navbar/Footer'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
