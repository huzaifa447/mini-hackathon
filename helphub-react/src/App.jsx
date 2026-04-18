import { DataProvider } from './context/DataContext'
import Header from './components/Header'
import Hero from './components/Hero'
import CoreFlow from './components/CoreFlow'
import FeaturedRequests from './components/FeaturedRequests'
import Footer from './components/Footer'

function App() {
  return (
    <DataProvider>
      <div className="site-shell">
        <Header />
        <main>
          <Hero />
          <CoreFlow />
          <FeaturedRequests />
        </main>
        <Footer />
      </div>
    </DataProvider>
  )
}

export default App
