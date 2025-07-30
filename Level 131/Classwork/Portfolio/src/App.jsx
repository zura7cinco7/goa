import AboutUs from "./Sections/AboutUs"
import ContactUs from "./Sections/ContactUs"
import Pricing from "./Sections/Pricing"
import Team from "./Sections/Team"
import Nav from "./Componenets/Nav"

const App =  () => {
  return(
    <main>
      <Nav />
      <Team />
      <Pricing />
      <ContactUs />
      <AboutUs />
    </main>
  )
}

export default App;

// 1) დააინსტალირეეთ reactის პროექტი სახელად portfolio პირადიპ bash terminalდან,  src ფოლდერში შექმენით components და sections ფოლდერები, ამ ფოლდერში 
// შექმენით საიტის 5 სხვადასხვა სექცია მაგ: About Us, Team, Pricing, Contact Us, საბოლოოდ components ფოლდერში შექმენით Nav კოპონენტი და id ების გამოყენებით 
// შექმენით ერთგვერდიანი ნავიგაცია a თეგის დახმარებით, nav კომპონენტი უნდა იყოს საიტის თავში