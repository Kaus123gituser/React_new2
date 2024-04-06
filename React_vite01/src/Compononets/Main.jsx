import React from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import Header from "./Header";
import '../Mediaquery.css';
const Main = () => {

    return (<>
        <>
            <div className="bg-indigo-600 py-4     container1">

            <Nav />
            <Hero></Hero>
            <Header/>
            </div>
        </>
    </>);

};
export default Main;