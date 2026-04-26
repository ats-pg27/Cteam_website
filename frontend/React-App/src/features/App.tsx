import Header_Nuv from '../components/header_nuv'
import '../css/App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Home'
import New from './NewPage'
function App() {
  

  return (
    <>
      <BrowserRouter>
      <Header_Nuv />
      <Routes>
        <Route path='/'element={<Home />}/>
        <Route path='Page1'element={<New />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
