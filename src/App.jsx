import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import CanonicalLink from './components/CanonicalLink'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Blog from './pages/Blog'
import BlogDetail from './pages/BlogDetail'
import Contact from './pages/Contact'
import PVCPipes from './pages/PVCPipes'
import HDPEPipes from './pages/HDPEPipes'

function App() {
  return (
    <Router>
      <CanonicalLink />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pvc-pipes" element={<PVCPipes />} />
          <Route path="/hdpe-pipes" element={<HDPEPipes />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </Router>
  )
}

export default App
