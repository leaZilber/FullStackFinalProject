import { Route, Routes } from 'react-router-dom'
import './App.css'
import { PersonalArea } from './components/personalArea'
import { HomePage } from './components/homePage'
import { InformationPage } from './components/information'
import { AboutUs } from './components/aboutUs'
import LoginComp from './components/homeComponents/login'
import RegisterComp from './components/homeComponents/register'
import MainPage from './components/mainPage'
import React from 'react'
import './index.css'
import './components/mainPage.css'
// import { Schedule } from './models/schedule'
// import { CheckPicture } from './components/checkPictu'
import SchedulePage from './components/schedule'

function App() {
  return (
    // <MainPage/>
    // <SchedulePage />
    /* <SchedulePage/> */
    /* <CheckPicture/> */
     <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/homePage" element={<HomePage />} />
        <Route path="/informationArea" element={<InformationPage />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/login" element={<LoginComp />} />
        <Route path="/register" element={<RegisterComp />} />
        <Route path='/personalArea' element={<PersonalArea />} />
        <Route path="*" element={<HomePage />} />
      </Routes> 
  )
}

export default App
