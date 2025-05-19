import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Happenings from "./pages/Happenings";
import Rules from "./pages/Rules";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>}>Home</Route>
          <Route exact path="/happenings" element={<Happenings/>}>Happenings</Route>
          <Route exact path="/rules" element={<Rules/>}>Rules</Route>
          <Route exact path="/about" element={<About/>}>About</Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
