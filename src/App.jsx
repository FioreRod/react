import { useState } from 'react'
import Header from './components/Header.jsx'
import WelcomeText from './components/ItemListContainer.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {
  

  return (
    <>
      <div>
        <Header />
        <WelcomeText />
        <Footer />
      </div>
    </>
  )

}

export default App
