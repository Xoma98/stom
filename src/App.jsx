import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import NavBar from './components/layout/NavBar'
import CompanyPage from './pages/CompanyPage'
import HomePage from './pages/HomePage'
import LegalPage from './pages/LegalPage'
import PricesPage from './pages/PricesPage'
import PrivacyPage from './pages/PrivacyPage'
import SitemapPage from './pages/SitemapPage'
import WorksPage from './pages/WorksPage'

function AppLayout() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col border-x border-zinc-200 bg-white text-zinc-900">
      <Header />
      <NavBar />
      <main className="flex-1 px-4 py-6 md:px-8 md:py-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/prices" element={<PricesPage />} />
          <Route path="/works" element={<WorksPage />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/sitemap" element={<SitemapPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/legal" element={<LegalPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  )
}
