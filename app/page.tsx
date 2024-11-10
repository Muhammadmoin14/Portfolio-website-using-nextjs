import Main from "./components/Main"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import Services from "./components/Services"


function Home() {
  return (
    <div>
      <Main/>
      <About/>
      <Services/>
      <Portfolio/>
      <Contact/>
    </div>
  )
}

export default Home