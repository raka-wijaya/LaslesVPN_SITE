import Navbar from './components/Navbar'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HeroSection from './pages/Hero'
import GetStarted from './pages/GetStarted'
import AboutUs from './pages/AboutUs'
import Features from './pages/Features'
import PricingSection from './pages/Section'
import TampilanTestimoni from './pages/Tampilan'
import Message from './pages/MessagePayment'
import NotFoundMessage from './pages/Message404'
import Footer from './components/Footer'

function App() {


  return (
    <BrowserRouter >
    <Navbar />
    <Routes>
      <Route path="/" element={<HeroSection />} />
      <Route path="/getstarted" element={<GetStarted />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/features" element={<Features />} />
      <Route path="/pricing" element={<PricingSection />} />
      <Route path="/testimonials" element={<TampilanTestimoni />} />
      <Route path="/payment" element={<Message />} />
      <Route path="/join" element={<NotFoundMessage />} />
      <Route path="/ready" element={<NotFoundMessage />} />
      <Route path="/help" element={<NotFoundMessage />} />
      <Route path="/signin" element={<NotFoundMessage />} />
      <Route path="/signup" element={<NotFoundMessage />} />
      <Route path="/download" element={<NotFoundMessage />} />
      <Route path="/locations" element={<NotFoundMessage />} />
      <Route path="/server" element={<NotFoundMessage />} />
      <Route path="/countries" element={<NotFoundMessage />} />
      <Route path="/blog" element={<NotFoundMessage />} />
      <Route path="/laslesvpn?" element={<NotFoundMessage />} />
      <Route path="/faq" element={<NotFoundMessage />} />
      <Route path="/tutorials" element={<NotFoundMessage />} />
      <Route path="/privacypolicy" element={<NotFoundMessage />} />
      <Route path="/termsofservice" element={<NotFoundMessage />} />
      <Route path="/affiliate" element={<NotFoundMessage />} />
      <Route path="/become-partner" element={<NotFoundMessage />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
