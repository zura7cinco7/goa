import { useMemo, useState } from "react";

export default function App() {
  const [num, setNum] = useState(0);
  const [text, setText] = useState("");

  function findPrimesUpTo(n) {
    const primes = [];
    for (let i = 2; i <= n; i++) {
      let isPrime = true;
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) primes.push(i);
    }

    console.log("re-calculations", primes);
    return primes;
  }

  const result = useMemo(() => findPrimesUpTo(num), [num]);

  return (
    <>
      <input
        type="number"
        placeholder="Enter Number"
        required
        value={num}
        onChange={(e) => setNum(parseInt(e.target.value))}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter Text"
        required
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
}

/* expensive calcualation - ი არის ისეთი გამოთვლა რომელიც მოითხვოს ბევრ დროს
და რესურსს 

useMemo არის კაუჭი რომელიც იმახსოვრებს ისეთ მნიშვნელობას რომელიც რამდენჯერმე იყო შემოტანილი, მაგალითად შევქმენით ფუნქცია რომელიც ითვლის რიცხვის ფაქტორიალს
იმ შემთხვევაში თუ მე გადავცი ამ ფუნქციას ერთი და იგივე მნიშვნელობა useMemo კაუჭი დაიმახსოვრებს ამ რიცხვის ფაქტორიალს შეინახავს და აღარ მოუწევს ერთი და იგივე
მნიშვნელობისთვის ფაქტორიალის გამოთვლა 

cache - რება არის ერთი და იგივე მნიშვნელობის შენახვა */