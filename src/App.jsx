import Header from './components/Header.jsx'
import WelcomeText from './components/ItemListContainer.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {
  

  return (
    <>
      <div className='div-app'>
        <Header />
        <WelcomeText texto="Hola usuario! Bienvenidx a mi e-commerce dee libros." />
        <Footer />
      </div>
    </>
  )

}

export default App
