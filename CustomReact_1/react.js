// const React = {
//   createElement: function createElement(type, props, children) {
//     const element = document.createElement(type);
//     element.textContent = children; 
    
//     for (const key in props) {
//       if (key === 'style') {
//         Object.assign(element.style, props.style);
//       } else {
//         element[key] = props[key];
//       }
//     }
    
//     return element;
//   }
// };

// const ReactDOM = {
//   render: function render(element, container) {
//     container.append(element);
//   }
// };

// const element1 = React.createElement(
//   'h1', 
//   {
//     className: "element", 
//     id: "first",
//     style: {
//       backgroundColor: "Red",
//       color: "white",
//       fontSize: "20px"
//     }
//   },
//   "This is the h1 element"
// );

// const root = document.querySelector('#root');
// ReactDOM.render(element1, root);
// console.log(element1);


//Original React code for comparison:

const React = {
  createElement : function(type, props, ...children){
    return {
      type : type,
      props : {
        ...props,
        children : children 
      }
    }
  }  
}

const ReactDOM = {
  // Modern-style API: createRoot returns an object with its own render method
  createRoot: function (container) {
    return {
      render: function (element) {
        container.innerHTML = '';
        container.appendChild(buildDOMNode(element));
      }
    };
  }
};

// Recursive helper: turns ONE element object into a real DOM node,
// including all of its nested children
function buildDOMNode(element) {
  // Base case: plain text/number children just become text nodes
  if (typeof element === 'string' || typeof element === 'number') {
    return document.createTextNode(element);
  }

  const domNode = document.createElement(element.type);
  const { children, style, ...restProps } = element.props;

  for (const key in restProps) {
    domNode[key] = restProps[key];
  }
  if (style) Object.assign(domNode.style, style);

  // Recursively build and attach every child (skip null/undefined placeholders)
  children.forEach((child) => {
    if (child != null) {
      domNode.appendChild(buildDOMNode(child));
    }
  });

  return domNode;
}

const element1 = React.createElement(
  'h1',
  props = {
    className : "h1Element1",
    id : "h1-element1",
    style : {
      backgroundColor : "yellow",
      fontSize : "30px",
      color : "black"
    }
  },
  "This is React H1 element"
)

const element2 = React.createElement(
  'h1',
  props = {
    className : "h1Element",
    id : "h1-element2",
    style : {
      backgroundColor : "Red",
      fontSize : "40px",
      color : "black"
    }
  },
  "This is React H1 element2"
)
// const root = document.querySelector("#root");
// ReactDOM.render(element1, root);
// ReactDOM.render(element2, root);

const div = React.createElement('div', null, element1,element2, null);

//Main Container to render react Elements
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(div);
