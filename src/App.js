import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Signup from "./components/signup/signup";
import Login from "./components/signup/login";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/signup" element={<Signup/>} ></Route>
        <Route path="/login" element={<Login/>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
