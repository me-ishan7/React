function App() {
    return (
        <>
            <h1>Hello, Vite! I am Ishan</h1>
            <h2>This is h2 heading</h2>
        </>
    )
}
export default App;

// here we've created app component which is going to be called in main.jsx file, 
// to do this - 2 things are required 
//1 - import App from "./App.jsx";
//2 - export this app function inside App - export default App;

// there can be only one default export - if more then named export

//named Export
export function Fun1(){
    return (
    <h1>this is named Export</h1>
    )
}

//named Export
export function Ishan(){
    return (
        <>
         <h2>this is also named Export</h2>
         <h2>My name is Ishan</h2>
        </>
    )
}

