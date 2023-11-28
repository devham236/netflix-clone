import React, { useEffect, useState } from "react"
import axios from "axios"
import MovieDiv from "./MovieDiv"
import { motion } from "framer-motion"

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

const Row = ({ collection }) => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    // const getCollections = async () => {
    //   try {
    //     const result = await axios.get(
    //       `${import.meta.env.VITE_BASE_URL}/api/v1/collections/collection`,
    //       {
    //         params: {
    //           url: collection.url,
    //         },
    //       }
    //     )
    //     const { results } = result.data.data
    //     setMovies(results)
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
    // getCollections()
    axios.get(collection.url).then((res) => {
      setMovies(res.data.results)
    })
  }, [])

  const movieElements = movies.map((movie) => (
    <MovieDiv key={movie.id} movie={movie} />
  ))

  return (
    <motion.div
      variants={row}
      initial="initial"
      animate="animate"
      className="max-h-full"
    >
      <div className="mb-2">
        <h1 className="text-lg text-white">{collection.title}:</h1>
      </div>
      <div className="relative flex items-center mb-8">
        <div className="w-full h-full overflow-x-auto overflow-y-hidden relative scrollbar scrollbar-h-[7px] scrollbar-thumb-rounded-full cursor-pointer scrollbar-thumb-red-600 whitespace-nowrap">
          {movieElements}
        </div>
      </div>
    </motion.div>
  )
}

export default Row
