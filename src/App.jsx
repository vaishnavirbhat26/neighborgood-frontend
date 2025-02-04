import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Dashboard from "./pages/dashboard/Dashboard"
import Profile from "./pages/profile/Profile"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import { Toaster } from "react-hot-toast"
import axios from "axios"
import UserProfile from "./pages/profile/UserProfile"

axios.defaults.baseURL = "https://neighborgood-s0cq.onrender.com"
axios.defaults.withCredentials = true

function App() {

  return (
    <BrowserRouter>
      <Toaster
        toastOptions={{
          className: "toast",
        }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/:id" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
