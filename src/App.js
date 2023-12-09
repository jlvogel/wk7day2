// import logo from './logo.svg';
// import './App.css';

import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import Component3 from "./components/Component3";

function App(props) {
  return (
    < div style={{display: "flex", backgroundColor: "blue"}}>

      <Component1 />
      <Component2 />
      <Component3 />

      {/*
      So best I can tell from studying inside this return statement, this is JSX.  Everything needs to be inside of <div></div> or <></> tags the empty tags is called a "Fragment"

      Also I've noticed that the site works (at least for now) if the Components inside the src/components folder are .js OR .jsx file extensions.  Which is interesting
      */}

      {/*
      From official Per Scholas Week 7 - Day 2 Notes:

      Basic Rules of JSX

      Writing React Functional Components

      You can write a react component using any method of writing functions.

      Basically any function that returns JSX (HTML Like Syntax) React will treat as a component.

      Rules of JSX

      JSX is the HTML like syntax we can use in React Components. There are several rules to keep in mind.

      1. ONLY ONE TOP-LEVEL ELEMENT.

      The div is the only top-level element

      GOOD:

      <div>
        <h1>Hello World</h1>
        <p>lorem ipsum</p>
      </div>

      BAD:
      The h1 and p are both at the top-level, this will cause an error:
      <h1>Hello World</h1>
      <p>lorem ipsum</p>

      ALSO GOOD:
      If you really don't want to wrap the content in a div you can use empty tags which is called a "Fragment"

      <>
        <h1>Hello World</h1>
        <p>lorem ipsum</p>
      </>

      2. Attributes are camelCase

      All HTML attributes you are use to become camel case when writing them in JSX.
        onclick becomes onClick
        onchange becomes onChange
        class becomes className(why? because the class keyword is already used in javascript)

      You get the idea.

      3. Inline styles in JSX

      In normal html a inline style would be written like this:

      <div style="display: flex; background-color: blue;">
        dfsfsfsdfsdf
      </div>

      But JSX is NOT HTML it is just an HTML like abstraction over Javascript's DOM API. So when writing inline styles you're dealing with the style object of the DOM node, so instead of a string you pass an object that will be merged into that nodes style object. Since it's javascript, all the CSS style attributes are now camel case instead of hyphenated:

      <div style={{display: "flex", backgroundColor: "blue"}}>
        dfsfsfsdfsdf
      </div>

      4. ARRAYS WORK

      You can pass arrays of JSX if you want.

      return [<h1>Hello World</h1>, <h1>Hello World</h1>, <h1>Hello World</h1>]

      is the same as me writing:

      return (
        <>
          <h1>Hello World</h1>
          <h1>Hello World</h1>
          <h1>Hello World</h1>
        </>
      )

      5. INJECTING JAVASCRIPT EXPRESSIONS

      Your JSX is treated as html, and anything in curly brackets are treated as Javascript expressions in the function's scope. Any valid javascript expression can be used this way.

      return <h1> I am {30 + 5} years old </h1>

      Key Takeaways

      JSX Syntax Quirks

      1. className instead of class
      2. props (always come from Outside the component)
      3. {} to embed Javascript
      4. {{}} for objects in JSX one curly brace set to say I am writing JS
         then one curly brace for the object syntax
      5. Writing CSS in camelCase
      6. Conditional rendering
      7. Everything Must Close
      8. Looping with map or map & filter
      9. Anything can be dynamic


      */}
      


      <h1>Hello World</h1>
      <p>lorem ipsum</p>
    </div>
    // <Component1 />
    // {/* */}  JSX STYLE COMMENT DOES NOT WORK HERE
    // MUST BE JS STYLE
    );
}

export default App;
