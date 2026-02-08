import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import ScrollToTop from './components/ScrollToTop'
import Layout from './components/Layout'
import Home from './pages/Home'
import Service from './pages/Service'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      offset: 80,
      easing: 'ease-out-cubic',
    })
  }, [])

  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </Layout>
    </>
  )
}
