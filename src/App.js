import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Signup from "./components/signup/signup";
import Login from "./components/signup/login";
import Home from "./components/Pages/HomePage";
import PrivateComponent from "./components/Private_component/PrivateComponent";
import UpdateProfile from "./components/Pages/UpdateProfile";
import VerifyEmailPage from "./components/Pages/VerifyEmailPage";
import ForgetPassword from "./components/signup/forgetPassword";
import ChangePassword from "./components/signup/changePassword";

function App() {


  return (
    <Fragment>
      <Header />
      <Routes>
        <Route element={<PrivateComponent />}>
        <Route path="/home" element={<Home />} ></Route>
        <Route path="/updateprofile" element={<UpdateProfile />} ></Route>
        <Route path="/verifyemailpage" element={<VerifyEmailPage/>} ></Route>
        </Route>
        
        <Route path="/signup" element={<Signup />} ></Route>
          <Route path="/login" element={<Login />} ></Route>
          <Route path="/forgetpassword" element={<ForgetPassword />} ></Route>
          <Route path="/changePassword" element={<ChangePassword />} ></Route>

      </Routes>
    </Fragment>
  );
}

export default App;
