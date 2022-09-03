import { useEffect, useState } from 'react'
import './App.css'
import Home from './sections/Home'
import Navbar from './components/Navbar'
import Fields from './sections/Fields'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import { BiArrowToTop } from 'react-icons/bi'
import { FaArrowUp } from 'react-icons/fa'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import { useApp } from './contexts/AppContext'


function App() {
  const [showArr, setShowArr] = useState(false)
  const { themeClass } = useApp()

  window.onscroll = (e)=> {
    if(window.innerHeight/3<window.scrollY){
      setShowArr(true)
    }else{
      setShowArr(false)
    }
  }

  const goToTop = ()=>{
    window.scrollTo({top: 0})
  }

  return (
    <>
      <div className={`App w-full flex flex-col ${themeClass.text}`}>
          <Navbar />
        <div className="flex flex-col w-full overflow-hidden">
          <Home />
          <Fields />
          <Skills />
          <Projects />
          <Contact />
        </div>
        <Footer />
        {showArr && <FaArrowUp onClick={goToTop}
        className='fixed bottom-7 cursor-pointer hover:bg-blue-800
        right-7 text-white  bg-blue-900 p-3 text-[2.5em]' />}
      </div>
    </>
  )
}

export default App
