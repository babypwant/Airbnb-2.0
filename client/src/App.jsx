import './App.css'
import { Route, Routes } from 'react-router-dom'
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LoginPage'
import Layout from './Layout'
import RegisterPage from './pages/RegsiterPage'
import axios from 'axios'
import { UserContextProvider } from './UserContext'
import AccountPage from './pages/Account'
import PlacesFormPage from './pages/PlacesFormPage'
import PlacesPage from './pages/PlacesPage'

axios.defaults.baseURL = 'http://127.0.0.1:4000'
axios.defaults.withCredentials = true

function App() {


  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' index element={<IndexPage/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/register' element={<RegisterPage/>} />
          <Route path='/account/profile' element={<AccountPage />} />
          <Route path='/account/places' element={<PlacesPage />} />
          <Route path='/account/places/new' element={<PlacesFormPage />} />


        </Route>
      </Routes>
    </UserContextProvider>

  )
}

export default App
