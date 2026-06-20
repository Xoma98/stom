import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import NavBar from './components/layout/NavBar'
import HomePage from './pages/HomePage'

export default function App() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col border-x border-orange-200 bg-white text-zinc-900">
      <Header />
      <NavBar />
      <main className="flex-1 px-4 py-6 md:px-8 md:py-10">
        <HomePage />
      </main>
      <Footer />
    </div>
  )
}
