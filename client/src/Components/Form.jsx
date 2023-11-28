import React from "react"
import { useContext } from "react"
import { Context } from "../Context"
import { Link } from "react-router-dom"
import bg from "../Images/bg.jpg"
import { motion } from "framer-motion"

const Form = () => {
  const { setFormInfo, handleAuth, error, path } = useContext(Context)

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormInfo((prev) => ({ ...prev, [name]: value }))
  }

  const form = {
    initial: {
      y: 150,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 1 },
    },
  }

  return (
    <div className="w-full h-full">
      <div className="absolute w-full h-full bg-gradient-to-b from-black via-transparent to-black"></div>
      <img src={bg} alt="" className="w-full h-full object-cover" />
      <div className="fixed inset-0 flex items-center justify-center">
        <motion.div
          variants={form}
          initial="initial"
          animate="animate"
          className="w-[400px] h-[500px] bg-[#000000bf] text-white bg-opacity-75 md:p-5 sm:p-10 rounded-xl flex flex-col items-center"
        >
          <h1 className="sm:text-2xl md:text-3xl font-extrabold">
            {path === "/login"
              ? "Login"
              : path === "/signup"
              ? "Sign Up"
              : null}
          </h1>
          <form
            action=""
            className="flex flex-col my-8 w-full"
            onSubmit={handleAuth}
          >
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="px-6 md:py-5 sm:py-4 mb-5 placeholder:text-base bg-[#333333] rounded-md outline-none text-lg"
              required
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="px-6 md:py-5 sm:py-4 mb-5 placeholder:text-base bg-[#333333] rounded-md outline-none text-lg"
              required
              onChange={handleChange}
            />
            <button
              type="submit"
              className="text-center px-6 sm:py-4 md:py-5 text-base bg-red-600 rounded-md"
            >
              {path === "/login"
                ? "Login"
                : path === "/signup"
                ? "Sign Up"
                : null}
            </button>
          </form>
          <p className="text-[#737373] sm:text-base md:text-lg">
            {path === "/login"
              ? "New to Netflix?"
              : path === "/signup"
              ? "Already have an Account"
              : null}{" "}
            <Link
              to={
                path === "/login"
                  ? "/signup"
                  : path === "/signup"
                  ? "/login"
                  : null
              }
              className="ml-2 text-white hover:underline duration-300 cursor-pointer"
            >
              {path === "/login"
                ? "Sign Up "
                : path === "/signup"
                ? "Login "
                : null}
              here.
            </Link>
          </p>

          {error ? (
            <span className="text-center text-red-400 text-md mt-2">
              {error}
            </span>
          ) : (
            ""
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default Form
