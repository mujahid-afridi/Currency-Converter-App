import React from "react";
import { useId } from "react";

function InputBox({
  label,
  amount = 0,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = 'usd',
  amountDisable = false,
  currencyDisable = false
}){
  const amountInputId = useId();
  return (
    <>
      <div id={amountInputId} className="w-full h-[30rem] bg-white rounded-[10px] p-[1rem] flex flex-col gap-[1rem]">
        <div className=" flex justify-between font-semibold">
          <p>{label}</p>
          <p>Currency Type</p>
        </div>
        <div className="flex justify-between">
          <input 
            id={amountInputId}
            className="md:w-[15rem] outline-none" type="number"
            value={amount} 
            disabled={amountDisable} 
            onChange={(e)=> onAmountChange(Number(e.target.value))}
          />
          <select name="" id="" className="w-[10rem] text-red-500"
            value={selectCurrency}
            onChange={(e)=>{
              onCurrencyChange(e.target.value)
            }}
            disabled={currencyDisable}
          >
            {
              currencyOptions.map((item)=>{
                return   <option key={item} value={item}>
                    {item}
                  </option>
              })
            }
          </select>
        </div>
      </div>
    </>
  )
}
export default InputBox;