import React, { useContext } from "react"
import MovieDiv from "./MovieDiv"
import bg from "../Images/bg.jpg"
import { Context } from "../Context"
import { motion } from "framer-motion"

const LikedMoviesRow = ({ movies }) => {
  const { userInfo } = useContext(Context)

  const movieElements = movies?.map((movie) => (
    <MovieDiv key={movie.id} movie={movie} />
  ))

  const row = {
    initial: {
      opacity: 0,
      x: 150,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, delay: 1 },
    },
  }

  return (
    <motion.div variants={row} initial="initial" animate="animate">
      <div className="mb-2">
        <h1 className="text-lg text-white">Favorite Movies:</h1>
      </div>
      <div className="relative flex items-center mb-8">
        <div className="w-full h-full overflow-x-auto relative scrollbar scrollbar-h-[7px] scrollbar-thumb-rounded-full cursor-pointer scrollbar-thumb-red-600 whitespace-nowrap">
          {userInfo.userArray?.length > 0 ? (
            movieElements
          ) : (
            <>
              <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative animate-pulse">
                <img src={bg} alt="" className="w-full h-auto block" />
              </div>
              <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative animate-pulse">
                <img src={bg} alt="" className="w-full h-auto block" />
              </div>
              <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative animate-pulse">
                <img src={bg} alt="" className="w-full h-auto block" />
              </div>
            </>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default LikedMoviesRow
