
import Banner from "./component/Banner"
import FunctionalSection from "./component/FunctionalSection"
import Nav from "./component/Nav"
import OurRecipes from "./component/OurRecipes"



function App() {

  return (
    <div className="container mx-auto">
      <Nav></Nav>
      <Banner></Banner>
      <OurRecipes></OurRecipes>
      <FunctionalSection></FunctionalSection>
      
    </div>
  )
}

export default App
