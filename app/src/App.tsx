import { useState } from 'react'
import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import { Loader } from './components/Loader'
import { MobileCTA } from './components/MobileCTA'

import BlogIndex from './pages/BlogIndex'
import Article from './pages/Article'
import { useTracking } from './hooks/useTracking'
import { CookieBanner } from './components/CookieBanner'

export default function App() {
  const [isLoaderVisible, setIsLoaderVisible] = useState(true)
  
  // Aktivace sledování Google Analytics napříč aplikací
  useTracking()

  return (
    <>
      <CookieBanner />
      {isLoaderVisible && <Loader onComplete={() => setIsLoaderVisible(false)} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clanky" element={<BlogIndex />} />
        <Route path="/clanky/:slug" element={<Article />} />
      </Routes>
      <MobileCTA />
    </>
  )
}
