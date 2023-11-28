import React, { useContext, useEffect, useState } from "react"
import collections from "../Utils/collections"
import randomNum from "../Utils/randomNum"
import { Link } from "react-router-dom"
import axios from "axios"
import { Context } from "../Context"
import { motion } from "framer-motion"

const movieDiv = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration: 1 },
  },
}

const Container = () => {
  const [truncatedOverview, setTruncatedOverview] = useState("")
  const { userInfo, moviePoster, setMoviePoster, setSelectedId, setModal } =
    useContext(Context)

  useEffect(() => {
    if (moviePoster?.overview) {
      const maxWordCount = 20
      const text = moviePoster.overview.trim().split(" ")

      if (text.length > maxWordCount) {
        setTruncatedOverview(text.slice(0, maxWordCount).join(" ") + "...")
      } else {
        setTruncatedOverview(moviePoster.overview)
      }
    }
  }, [moviePoster])

  useEffect(() => {
    axios.get(collections[0].url).then((res) => {
      const results = res.data.results
      setMoviePoster(results[randomNum(results.length)])
    })
  }, [])

  return (
    <div className="w-full h-[600px]">
      <motion.div
        variants={movieDiv}
        initial="initial"
        animate="animate"
        className="w-full h-full"
      >
        <div className="absolute w-full h-[600px] bg-gradient-to-b from-black via-transparent to-black"></div>
        <img
          src={`https://image.tmdb.org/t/p/original/${moviePoster?.backdrop_path}`}
          className="w-full h-full object-cover"
          alt="image"
        />
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { duration: 1, delay: 0.5 },
          }}
          className="w-full absolute md:top-[30%] sm:top-[50%] px-10 text-white sm:flex sm:flex-col sm:items-center md:items-start"
        >
          <motion.h1
            animate={{ textShadow: "0px 0px 8px #000" }}
            className="sm:text-2xl md:text-4xl md:font-bold text-center"
          >
            {moviePoster?.title}
          </motion.h1>
          <div className="max-w-[30%] sm:hidden md:block">
            <motion.p
              animate={{ textShadow: "0px 0px 10px #000" }}
              className="mt-4 text-sm"
            >
              {truncatedOverview}
            </motion.p>
          </div>
          <div className="mt-4">
            {userInfo && (
              <button
                onClick={() => {
                  setSelectedId(moviePoster.id)
                  setModal(moviePoster)
                }}
                className="border-2 border-white text-white rounded-md opacity-50 hover:opacity-100 duration-300 font-bold md:w-[150px] sm:w-[100px] py-2 px-2"
              >
                Details
              </button>
            )}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Container
