import React from 'react'
import {Routes, Route} from "react-router-dom"
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Pages/Home'
import Blog from './Components/Pages/Blog'
import SinglePost from './Components/Pages/SinglePost'
import Pages from './Components/Pages/Pages'
import Contact from './Components/Pages/Contact'



const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog' element ={<Blog/>}/>
        <Route path='/singlepost' element = {<SinglePost/>}/>
        <Route path='/pages' element = {<Pages/>}/>
        <Route path='/contact' element ={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App

