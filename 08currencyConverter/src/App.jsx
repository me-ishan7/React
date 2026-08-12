import React, {useState} from "react";
import InputBox from "./Components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import currencyCover from "./assets/Currency-cover.jpg";

function App() {
  const [amount, setAmount] = useState(1);
  const [From, setFrom] = useState("usd");
  const [To, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(From);
  const currencyOptions = Object.keys(currencyInfo);

  const swapCurrency = () => {
    setFrom(To);
    setTo(From);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  const handleAmountChange = () => {
    setConvertedAmount(amount * currencyInfo[To]);
  }
  return (
    <div 
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${currencyCover})`
      }}>

        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAmountChange();
            }}
          >
          <div className="w-full mb-1">
            <InputBox
              label="From"
              amount={amount}
              onAmountChange={(value)=> setAmount(value)}
              onCurrencyChange={(value) => setFrom(value)}
              currencyOptions={currencyOptions}
              selectedCurrency={From}
            />
          </div>
          <div className="relative w-full h-0.5">
            <button
              className="absolute top-1/2 left-1/2
              transform -translate-x-1/2 -translate-y-1/2 bg-blue-400 rounded-full p-2 shadow-md"
              onClick={swapCurrency}
            >
              Swap
            </button>
          </div>
          <div className="w-full mt-1">
            <InputBox 
              label = "To"
              amount = {convertedAmount}
              convertedAmount = {convertedAmount}
              onAmountChange = {(value) => (setAmount(value))}
              onCurrencyChange = {(value) => (setTo(value))}
              currencyOptions={currencyOptions}
              selectedCurrency={To}
              amountDisabled
            >
            </InputBox>
          </div>
          
          <button
            type = "submit"
            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
          >Convert {From} to {To }</button>
          </form>
        </div>
    </div>
  </div>
  )
}
export default App