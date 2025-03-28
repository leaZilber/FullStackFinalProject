import { Route, Routes } from 'react-router-dom'
import './App.css'
import { HomePage } from './components/homePage'
import { InformationPage } from './components/information'
import { AboutUs } from './components/aboutUs'
import LoginComp from './components/homeComponents/login'
import RegisterComp from './components/homeComponents/register'

function App() {
  return (
    <Routes>
      <Route path="/homePage" element={<HomePage/>} />
      <Route path="/informationArea" element={<InformationPage />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/login" element={<LoginComp />} />
      <Route path="/register" element={<RegisterComp />} />
      {/* <Route path="*" element={<HomePage />} />  */}
    </Routes>
  )
}

export default App
