
import { Routes } from 'react-router-dom'
import './App.css'
import Layout from './layout/Layout'
import 'bootstrap/dist/css/bootstrap.css'
import { categoryRoutes } from './pages/category/routes'
import { homeRoutes } from './pages/home/routes'
import { bookRoutes } from './pages/book/routes'
function App() {


  return (
    <Routes>
      {homeRoutes}
      {categoryRoutes}
      {bookRoutes}
    </Routes>
  )
}

export default App
