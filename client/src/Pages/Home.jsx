import React, { useContext, useEffect, useState } from "react"
import Container from "../Components/Container"
import Row from "../Components/Row"
import LikedMoviesRow from "../Components/LikedMoviesRow"
import collections from "./../Utils/collections"
import { Context } from "../Context"
import { motion, AnimatePresence } from "framer-motion"
import DetailsModal from "../Components/DetailsModal"

const Home = () => {
  const { userInfo, selectedId } = useContext(Context)

  const rows = collections.map((collection) => (
    <Row key={collection.id} collection={collection} />
  ))

  return (
    <div className="w-full h-full relative">
      <Container />
      <div className="w-full h-[calc(100%-600px)] sm:px-5 md:px-10">
        {userInfo && <LikedMoviesRow movies={userInfo.userArray} />}
        {rows}
      </div>
      <AnimatePresence>
        {selectedId && (
          <motion.div
            layoutId={selectedId}
            className="fixed w-full h-full backdrop-blur-sm z-50 top-0 left-0 bottom-0 flex items-center justify-center"
          >
            <DetailsModal id={selectedId} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Home
