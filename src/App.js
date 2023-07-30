import Layout from './components/Layout/index'
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/contact/contact'
import Portfolio from './components/Portfolio/Portfolio'

function App() {
  return (
    <>
      <Routes>
        <Route path="/portfolio_react" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='portfolio' element={<Portfolio />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
