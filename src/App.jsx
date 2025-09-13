import React, { useState } from "react";
import InputBox from "./Component/InputBox";
import useCurrencyInfo from "./Hooks/useCurrencyInfo";


function App(){
  let [amount, setAmount] = useState()
  let [from, setFrom] = useState('usd')
  let [to, setTo] = useState('pkr')
  let [convertedAmount,  setConvertedAmount] = useState(0)

  let currencyInfo = useCurrencyInfo(from)
  let options = Object.keys(currencyInfo)

  let swap = () =>{
     const tempFrom = from;
  const tempTo = to;
  const tempAmount = amount;
  const tempConverted = convertedAmount;

    setFrom(tempTo)
    setTo(tempFrom)
    console.log('Amount : ', amount)
    console.log(convertedAmount)
    setConvertedAmount(tempConverted)
    setAmount(tempAmount)
  }
  let convert = () =>{
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <>
      <form action="submit" onSubmit={(e)=>{
        e.preventDefault();
        convert();
      }}>
        <div className="w-[100%] h-screen flex justify-center items-center bg-[url(https://c8.alamy.com/comp/2CCAJD5/imaginatory-fractal-background-image-2CCAJD5.jpg)] bg-center bg-cover ">
          <div className="w-[50rem] h-[25rem] flex flex-col gap-[2rem] bg-white/70 rounded-[20px] p-[1rem]">
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              onAmountChange={(amount)=> setAmount(amount)}
              selectCurrency={from}
            ></InputBox>
            <button className="absolute top-[46%] left-[38%] translate-x-1/2 p-[1rem] bg-pink-500 rounded text-lg font-bold" onClick={swap}>
              Swap
            </button>
            <InputBox
              label="To"
              amount={amount * currencyInfo[to]}
              currencyOptions={options}
              onCurrencyChange={(currency)=> setTo(currency)}
              selectCurrency={to}
              amountDisable={true}
            ></InputBox>
          </div>
        </div>
      </form>
    </>
  )
}
export default App;