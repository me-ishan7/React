import React, {useId} from "react";

function InputBox({
  label,  
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className=""
}) {
  const amountInputId = useId();
  return(
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2 rounded-l-sm bg-gray-100 p-2 flex flex-col justify-end ">
        <label 
        className="text-gray-700 block"
        htmlFor = {amountInputId}>
          {label}
        </label>

        <input type="number" 
          id = {amountInputId}
          placeholder="Enter Amount" 
          className="outline-none bg-transparent border-gray-200 shadow-2xl border py-3"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) => onAmountChange &&   onAmountChange(Number(e.target.value))}
        >
        </input>
      </div>

      <div className="w-1/2 bg-gray-100 flex flex-col justify-end items-end rounded-r-sm p-2">
        <label className="text-gray-700">
          Currency Type
        </label>
        <select 
          className="bg-gray-200 cursor-pointer rounded-sm outline-none p-1 mt-4"
          value={selectedCurrency}
          onChange={(e) => {onCurrencyChange && onCurrencyChange(e.target.value)}}
          disabled = {currencyDisabled}
          >
          {
          currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))
          }
        </select>
      </div> 
    </div>
  )
}

export default InputBox