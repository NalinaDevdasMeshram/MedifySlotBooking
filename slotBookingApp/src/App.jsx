// import Home from './Home/Home'
import './App.css'
import { CssBaseline } from '@mui/material'
import { Outlet } from 'react-router-dom'
 import DownloadApp from './Components/Section/DownloadApp/DownloadApp'
 import Footer from './Components/Footer/Footer'

function App() {


  return (
   <div>
    <CssBaseline/>
    <Outlet/>
    <DownloadApp/>
    <Footer/> 
    {/* <Home/> */}
   </div>
  )
}

export default App
