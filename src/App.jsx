import "./App.css";
import Home from "./Component/Home/Home";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./Component/AboutUs/AboutUs";
import CrossFit from "./Component/CrossFit/CrossFit";
import Trainers from "./Component/Trainers/Trainers";
import Testimonials from "./Component/Testimonials/Testimonials";
import Fitness from "./Component/Fitness/Fitness";
import Contact from "./Component/Contact/Contact";
import Login from "./Component/LogIn/Login";
import Register from "./Component/Register/Register";
import Shop from "./Component/Shop/Shop";
import AuthenticatedUser from "./Component/Dashboard/AuthenticatedUser/AuthenticatedUser";
import AuthUser from "./Component/Dashboard/LoginLogOut/AuthUser/AuthUser";

function App() {
  const { userRole } = AuthUser();
  console.log(userRole)
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/cross-fit" element={<CrossFit />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/fitness" element={<Fitness />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
        <Routes>
          <Route path="/dashboard/*" element={userRole === "admin" ? <AuthenticatedUser /> : <Login />} />
        </Routes>
    </div>
  );
}

export default App;
