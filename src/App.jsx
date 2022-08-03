import { Routes, Route } from 'react-router-dom'
import Home from './components/dashboard/Home'
import Login from './components/login'
import PageUno from './components/dashboard/PageUno'
import PageDos from './components/dashboard/PageDos'
import PageTres from './components/dashboard/PageTres'
import Layout from './components/dashboard/Layout'
import ProtecteRoute from './components/protecteRoute';
import validateToken from './customHooks/validateToken';

function App() {
  
  const refresh = validateToken();
  refresh()

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/dashboader' element={<ProtecteRoute><Layout /></ProtecteRoute>}>
          <Route index element={<Home />} />
          <Route path='table' element={<PageUno />} />
          <Route path='billing' element={<PageDos />} />
          <Route path='virtual-reality' element={<PageTres />} />
        </Route>
        <Route path='*' element={<h1>404</h1>}></Route>
      </Routes>
    </div>
  )
}
export default App
