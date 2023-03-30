import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Signup from "./components/signup/signup";
import Login from "./components/signup/login";
import Home from "./components/Pages/HomePage";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/signup" element={<Signup/>} ></Route>
        <Route path="/login" element={<Login/>} ></Route>
        <Route path="/home" element={<Home/>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
