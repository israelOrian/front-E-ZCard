import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Contacts from './pages/Contacts'
import UserScreen1 from './pages/UserScreen1'


function App() {

  return (
  
      <BrowserRouter> 
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/Contacts" element={<Contacts/>} />
        <Route path="/UserScreen1" element={<UserScreen1/>} />
      </Routes>
      </BrowserRouter>
  )
}

export default App
