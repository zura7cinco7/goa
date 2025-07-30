import { useState } from "react"
import MyText from "./MyText";

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1)
  }
  
  return (
    <>
      <p>{count}</p>
      <button onClick={increase}>Increase By One</button>

      <MyText />
    </>
  )
}

export default App

/* memo გვაძლევს იმის საშუალოებას რომ არ დავარენდეროთ ხელახლა ისეთი კომპონენტი რომლის props - ი ან მდგომარეობა არ იცვლება 

useMemo არის კაუჭი რომელიც იმახსოვრებს ისეთ მნიშვნელობას რომელიც რამდენჯერმე იყო შემოტანილი, მაგალითად შევქმენით ფუნქცია რომელიც ითვლის რიცხვის ფაქტორიალს
იმ შემთხვევაში თუ მე გადავცი ამ ფუნქციას ერთი და იგივე მნიშვნელობა useMemo კაუჭი დაიმახსოვრებს ამ რიცხვის ფაქტორიალს შეინახავს და აღარ მოუწევს ერთი და იგივე
მნიშვნელობისთვის ფაქტორიალის გამოთვლა 

expensive calculation - ი არის ისეთი გამოთვლა რომელსაც სჭირდება დიდი დრო და რესურსი

caching - ი არის ერთი და იგივე მნიშვნელობის შენახვა */