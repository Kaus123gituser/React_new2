import React from "react";
// import Tea from "./Tea";
import './index.css';
// import'./App.css';
import Header from "./Compononets/Header";
import Main from './Compononets/Main';
const App = () => {

  return (<>
    <Main/>  
    {/* <h1 className="text-3xl font-bold underline">App section of the React Web App</h1> */}
    {/* <Header></Header> */}
    <Header/>
    {/* <Tea/> */}
  </>
  )
};

export default App;