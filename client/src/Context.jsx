import axios from "axios"
import React, { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Context = createContext()

function ContextProvider({ children }) {
  const [error, setError] = useState(false)
  const [moviePoster, setMoviePoster] = useState(null)
  const [selectedId, setSelectedId] = useState(null)
  const [userInfo, setUserInfo] = useState(null)
  const [formInfo, setFormInfo] = useState({
    email: "",
    password: "",
  })

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"))

    const verifyToken = async () => {
      try {
        const result = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/api/v1/user`,
          {
            token,
          }
        )
        const { email, _id, userArray } = result.data._doc
        setUserInfo((prev) => ({
          ...prev,
          email,
          id: _id,
          userArray,
        }))
      } catch (error) {
        console.error(error)
      }
    }

    verifyToken()
  }, [])

  async function addOrRemove(item, method) {
    try {
      const result = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/v1/user/addOrRemove/${
          userInfo.id
        }`,
        {
          item,
          method,
        }
      )
      const { userArray } = result.data._doc
      setUserInfo((prev) => ({ ...prev, userArray }))
    } catch (err) {
      console.log(err)
    }
  }

  const path = window.location.pathname
  const navigate = useNavigate()

  const handleAuth = async (event) => {
    event.preventDefault()
    try {
      const result = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/v1/user${path}`,
        {
          email: formInfo.email,
          password: formInfo.password,
        }
      )
      const { email, id, token, userArray } = result.data
      setUserInfo((prev) => ({ ...prev, email, id, userArray }))
      localStorage.setItem("token", JSON.stringify(token))
      navigate("/")
    } catch (error) {
      console.error(error.response)
      const errorMessage = error.response.data.message
      setError(errorMessage)
    }
  }

  const logOut = () => {
    try {
      localStorage.removeItem("token")
      setUserInfo(null)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <Context.Provider
      value={{
        moviePoster,
        userInfo,
        formInfo,
        path,
        error,
        selectedId,
        setSelectedId,
        setError,
        handleAuth,
        setFormInfo,
        setUserInfo,
        addOrRemove,
        setMoviePoster,
        logOut,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export { Context, ContextProvider }
