// import logo from './logo.svg';
// import './App.css';

import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import Component3 from "./components/Component3";

function App(props) {
  return (
    <>
      <Component1 />
      <Component2 />
      <Component3 />

      {/*
      So best I can tell from studying inside this return statement, this is JSX.  Everything needs to be inside of <div></div> or <></> tags the empty tags is called a "Fragment"

      Also I've noticed that the site works (at least for now) if the Components inside the src/components folder are .js OR .jsx file extensions.  Which is interesting
      */}


      <h1>Hello World</h1>
      <p>lorem ipsum</p>
    </>
    );
}

export default App;
