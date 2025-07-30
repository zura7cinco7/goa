import Nav from "./Componenets/Nav"
import AboutOurTeam from "./Sections/AboutOurTeam"
import AboutOurWebPage from "./Sections/AboutOurWebPage"
import ContactUs from "./Sections/ContactUs"
import "./App.css"

const App = () => {
  return (
    <div>
      <Nav />
      <AboutOurTeam />
      <ContactUs />
      <AboutOurWebPage />
    </div>
  )
}

export default App;