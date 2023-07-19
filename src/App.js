import Layout from './components/Layout/index'
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
