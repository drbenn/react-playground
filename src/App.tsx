import './App.css'
import { Routes, Route } from "react-router-dom"
import { Navbar } from './components/navbar/navbar'
import { Home } from './components/home/home'
import { UseEffectApiFetch } from './components/useeffect-api-fetch/useeffect-api-fetch'
import { AxiosApiFetch } from './components/axios-api-fetch/axios-api-fetch'
import { UseState } from './components/useState/useState'
import { UseRef } from './components/useRef/useRef'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <div className='routes-container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/useState" element={<UseState />} />
          <Route path="/useRef" element={<UseRef />} />
          <Route path="/useeffect-api-fetch" element={<UseEffectApiFetch />} />
          <Route path="/axios-api-fetch" element={<AxiosApiFetch />} />



        </Routes>
      </div>
    </>

  )
}

export default App
