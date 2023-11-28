import React from "react"
import { Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import LoginPage from "./Pages/LoginPage"
import SignUpPage from "./Pages/SignUpPage"

const App = () => {
  return (
    <div className="w-screen h-screen relative scrollbar-none">
      <Navbar />
      <Routes location={location} key={location.key}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
      </Routes>
    </div>
  )
}

export default App
