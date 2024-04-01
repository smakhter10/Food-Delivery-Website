import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import axios from 'axios'
import {Toaster} from 'react-hot-toast';

axios.defaults.baseURL = 'http://localhost:5001'
axios.defaults.withCredentials = true

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Toaster position="top-center" toastOptions={{duration:2000}} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
