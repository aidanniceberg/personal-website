import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'
import Layout from './Pages/Layout/Layout'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
