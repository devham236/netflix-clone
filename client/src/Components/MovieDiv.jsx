import React, { useState, useContext } from "react"
import bg from "../Images/bg.jpg"
import { Context } from "../Context"
import { motion } from "framer-motion"

const MovieDiv = ({ movie }) => {
  const [hovered, setHovered] = useState(false)
  const { userInfo, addOrRemove, setSelectedId } = useContext(Context)

  function heartIcon() {
    const addedToArray = userInfo.userArray?.some(
      (likedMovie) => likedMovie.id === movie.id
    )

    if (addedToArray) {
      return (
        <div
          className="px-2 py-1 rounded-br-lg bg-[#333333] bg-opacity-50 absolute top-0 left-0"
          onClick={(e) => {
            e.stopPropagation()
            addOrRemove(movie, "$pull")
          }}
        >
          <i className="fa-solid fa-heart text-red-600 text-lg"></i>
        </div>
      )
    } else if (hovered) {
      return (
        <div
          className="px-2 py-1 rounded-br-lg bg-[#333333] bg-opacity-50 absolute top-0 left-0"
          onClick={(e) => {
            e.stopPropagation()
            addOrRemove(movie, "$push")
          }}
        >
          <i className="fa-regular fa-heart text-red-600 text-lg"></i>
        </div>
      )
    }
  }

  return (
    <motion.div
      className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => {
        setSelectedId(movie.id)
      }}
      layoutId={movie.id}
    >
      <img
        src={
          movie.backdrop_path
            ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
            : bg
        }
        className="w-full h-auto block"
        alt=""
      />
      {userInfo && heartIcon()}
    </motion.div>
  )
}

export default MovieDiv
