// imports
import Header from './components/Header.jsx'
import Nav from './components/Nav.jsx'
import Body from './components/Body.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  return (
    <div>
      <Header
        title="Courtney's GitHub"
        tagline="Building things, breaking things, and figuring out why."
      />

      <div className="page-layout">
        <Nav />
        <Body />
      </div>

      <Footer />
    </div>
  )
}

export default App