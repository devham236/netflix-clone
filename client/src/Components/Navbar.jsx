import React, { useContext } from "react"
import { Context } from "../Context"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const header = {
  initial: {
    opacity: 0,
    y: -50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
}

const buttons = {
  initial: {
    opacity: 0,
    x: 50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 1 },
  },
}

const Navbar = () => {
  const { userInfo, logOut } = useContext(Context)

  return (
    <div className="text-white w-full h-16 sm:px-5 md:px-10 flex items-center justify-between z-40 absolute">
      <Link to="/">
        <motion.h1
          variants={header}
          initial="initial"
          animate="animate"
          className="text-red-600 md:text-3xl sm:text-2xl font-bold uppercase"
        >
          Netflix
        </motion.h1>
      </Link>
      <div className="flex">
        {userInfo ? (
          <motion.div
            variants={buttons}
            initial="initial"
            animate="animate"
            className="flex"
          >
            <button
              className="mr-1 border border-red-600 md:px-4 sm:px-3 md:py-2 sm:py-1 rounded-md opacity-50 hover:opacity-100 hover:bg-red-600 duration-300"
              onClick={logOut}
            >
              Logout
            </button>
            <div className="px-3 py-2 ml-1 bg-[#333333] rounded-md opacity-50 hover:opacity-100 duration-300 cursor-pointer flex items-center">
              <i className="fa-regular fa-user mr-1"></i>
              <p className="text-xs">{userInfo.email}</p>
            </div>
          </motion.div>
        ) : (
          <motion.div variants={buttons} initial="initial" animate="animate">
            <Link to="/login">
              <button className="md:mr-3 sm:mr-1 bg-red-600 sm:px-3 sm:py-1 rounded-md opacity-50 hover:opacity-100 duration-300 shadow-2xl md:text-lg sm:text-md">
                Log In
              </button>
            </Link>

            <Link to="/signup">
              <button className="md:ml-3 sm:ml-1 bg-red-600 sm:px-3 sm:py-1 rounded-md opacity-50 hover:opacity-100 duration-300 md:text-lg sm:text-md">
                Sign Up
              </button>
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Navbar
