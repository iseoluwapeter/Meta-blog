import React from 'react'
import Hero from '../Hero/Hero'
import BlogList from '../BlogList/BlogList'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <BlogList/>
      <Footer/>
    </>
  )
}

export default Home
