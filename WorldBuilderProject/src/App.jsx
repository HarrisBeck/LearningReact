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
      <div className="mx-5 my-4">
        <Component />
      </div>
    </>
  );
}

export default App;
