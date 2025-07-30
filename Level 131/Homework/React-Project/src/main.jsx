import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


// 2) შექმენით ახალი React - ის პროექტი, წაშალეთ ზედმეტი Folder - ები, src Folder - ში შექმენით ერთი Folder - ი სახელად Sections სადაც გექნებათ რამოდენიმე 
// ფაილი მაგალითად (AboutOurWebPage.jsx,ContactUs.jsx და ასე შემედგ) ამ ფაილებში შექმენით ფუნქციური კომპოენენტები რომელიც დააბრუნებს ინფორმციას, უნდა 
// გქონდეთ კიდევ ერთი Folder - ი სახელად Componenets მასში შექმენით ერთი ფაილი სახელად Nav.jsx - სადაც თქვენ შექმნით ერთ გვერდიან ნავიგაციას 
// (გამოიყენეთ id - ები), ეს ყველაფერი გასტილეთ css - ის გამოყენებით