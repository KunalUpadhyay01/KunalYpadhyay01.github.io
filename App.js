import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from "./components/hero"
import Nav from "./components/Nav";
import "./css/style.css"
import Projects from "./components/projects";
import Contact from "./components/contact";
function App() {
  return (
    <>
    <Nav />
    <Hero />
    <Projects />
    <Contact />
    </>
  );
}

export default App;
