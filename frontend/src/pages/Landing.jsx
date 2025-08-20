import { useState } from 'react'
import NavigationBar from '../components/NavigationBar'
import '../css/Landing.css'

function Landing() {

  return (
    <>
      <NavigationBar />
      <div className='landing-card m-5'>
        <h1 className='fw-bold mb-3'>Book Hub: An All-in-One Central Repository for Books</h1>
        <p className='text-center'>Book Hub is a centralized platform that brings together a wide collection of books into one convenient repository. It allows users to easily discover, access, and manage both digital and physical books without needing multiple platforms. By combining organization, accessibility, and user-friendly features, Book Hub makes reading and managing books more efficient and enjoyable.</p>
      </div>
    </>
  )
}

export default Landing
