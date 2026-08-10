import { useState, useCallback, useEffect, useRef } from "react"

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [symbolAllowed, setSymbolAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const [isCopied, setIsCopied] = useState(false);
  const passwordRef = useRef(null)

  const passwordGenerator = 
  useCallback(() => {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if(numberAllowed) str += "0123456789"
    if(symbolAllowed) str += "~!@#$%^&*()[]{}|\':;/?><.,+_-"

    for(let i = 0; i < length; i++) {
      let charIndex = Math.floor((Math.random() * str.length))
      pass += str.charAt(charIndex)
    }
    setPassword(pass);
  }, [length, numberAllowed, symbolAllowed, setPassword]);

  useEffect(() => {passwordGenerator()}, [length, numberAllowed, symbolAllowed])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    setIsCopied(true)

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);

    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-black-200 bg-gray-400">

        <h1 className="text-2xl font-bold text-center text-white mb-2">Password Generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-gray-100">
          <input 
            type="text"
            value={password}
            readOnly
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            ref={passwordRef}
            ></input>
            <button 
            className={`outline-none text-white px-3 py-0.5 shrink-0 transition-colors ${
              isCopied ? "bg-blue-900" : "bg-blue-700 hover:bg-blue-300"
            }`} 
            onClick={copyPasswordToClipboard}
            >
            {isCopied ? "Copied!" : "Copy"}
          </button>
      </div>

        
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input 
            type="range"
            min = {8}
            max={100}
            value = {length}
            className="cursor-pointer"
            onChange={(e) => {setLength(e.target.value)}} />
            <label>Length : {length}</label>
          </div>
    
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
            defaultChecked = {numberAllowed}
            id = "numberInput"
            onChange={() => setNumberAllowed((prev) => !prev)}
            ></input>
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
            defaultChecked = {symbolAllowed}
            id = "symbolInput"
            onChange={() => setSymbolAllowed((prev) => !prev)}
            ></input>
            <label htmlFor="symbolInput">Symbols</label>
          </div>
        </div>
      </div>
  )
}

export default App
