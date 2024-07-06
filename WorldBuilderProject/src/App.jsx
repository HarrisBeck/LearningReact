import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Happenings from "./pages/Happenings";
import Rules from "./pages/Rules";
import About from "./pages/About";

function App() {
  let Component;

  console.log(window);

  switch (window.location.pathname) {
    case "/happenings":
      Component = Happenings;
      break;
    case "/rules":
      Component = Rules;
      break;
    case "/about":
      Component = About;
      break;
    default:
    case "/":
      Component = Home;
  }

  return (
    <>
      <Navbar />
      <Component />
      <p className="MilitaryReport">
        This is a test of what a military report will look like
      </p>
    </>
  );
}

export default App;
