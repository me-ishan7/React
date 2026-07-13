const element1 = React.createElement(
  'h1', 
  {id : "title",
    style : {
      backgroundColor : "Red",
      color : "white"
    }
  },
  "This is Heading 1"
  );
const element2 = React.createElement('h1', null, "Heading 2");
// Creating Element like this is verbose heavy
// we can use jsx here
// jsx --> JavaScript Xml -- Look like Html (Babel)

// Flow : how html(babel) converted into js -> 
//babel   -->   React  -->  RectDOM --> Real DOM(HTML ELEMENT)

// JSX --> React.createELement() --> React Element(JS Object) --> Real DOM(HTML ELEMENT)


{/* <h1 id="title">This is h1 tag</h1> : html (babel)
 --> React.createElement('h1',{id:'title'},"This is h1 tag") --> {type:"h1", props:{id:"title", children:"This is h1 tag"}} --> <h1 id="title">This is h1 tag</h1> */}

const element3Jsx = (<div>
    <h1>Heading 1 using babel</h1>
    <h1>Heading 2 using babel</h1>
  </div>);

const div = React.createElement(
  'div', 
  {id : "Container"},
  element1,element2,element3Jsx
);



// React Component -> is function that return jsx

function App() {
  return (
    <h1>React Component : is function that return jsx</h1>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(div);

//Rendering Component

root.render(App());
root.render(<h1>React Component : is function that return jsx</h1>)
root.render(<App/>)


function Header() {
    return <h1 style = {{color: "white", backgroundColor : "red"}}>My Website</h1>;
}
function Main(){
    return <h2>Website Content - main Section</h2>
}
function Footer() {
    const year = 2026;
    return <p>© {year} My Website</p>;
}

function App() {
    return (
        <div>
            <Header />
            <Main />
            <p>This is how component works</p>
            <Footer />
        </div>
    );
}

// Render App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


// This is hardcoded
function Greeting() {
    return <h1>Hello Ishan</h1>;
}

// Component receives props as parameter
function Greeting(props) {
    return <h1>Hello {props.name}</h1>;
}

// Pass data via attributes
const app = (
    <div>
        <Greeting name="Ishan" />
        <Greeting name="Alice" />
        <Greeting name="Bob" />
    </div>
);

// Output:
// <div>
//   <h1>Hello Ishan</h1>
//   <h1>Hello Alice</h1>
//   <h1>Hello Bob</h1>
// </div>

//Props is an object containing all attributes you pass:
{/* <Greeting name="Rohit" age={25} />

const props = {
    name: "Rohit",
    age: 25
};
Then calls:


Greeting(props); */}

//Accessing props

function UserCard(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Location: {props.location}</p>
        </div>
    );
}

// Use it
<UserCard name="Ishan" age={22} location="India" />

// react does : 
// // React creates props object
// const props = {
//     name: "Rohit",
//     age: 25,
//     location: "India"
// };

// // React calls
// UserCard(props);


// Without destructuring
function UserCard(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
        </div>
    );
}

// With destructuring (preferred)
function UserCard({ name, age }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Age: {age}</p>
        </div>
    );
}





