import React, { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import getDetails from "../Utils/getDetails"
import bg from "../Images/bg.jpg"
import { Context } from "../Context"

const DetailsModal = ({ id }) => {
  const { addOrRemove, userInfo, setSelectedId } = useContext(Context)
  const [modalMovie, setModalMovie] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(getDetails(id)).then((res) => {
      setModalMovie(res.data)
    })
  }, [])

  function heartIcon() {
    const addedToArray = userInfo.userArray?.some((movie) => movie.id === id)

    if (addedToArray) {
      return (
        <button
          onClick={() => addOrRemove(modalMovie, "$pull")}
          className="bg-slate-800 mr-3 text-black rounded-md shadow-2xl  duration-300 font-bold py-1 px-4"
        >
          <i className="fa-solid fa-heart text-red-600 text-lg"></i>
        </button>
      )
    } else {
      return (
        <button
          onClick={() => addOrRemove(modalMovie, "$push")}
          className="bg-slate-800 mr-3 text-black rounded-md shadow-2xl duration-300 font-bold py-1 px-4"
        >
          <i className="fa-regular fa-heart text-red-600 text-lg"></i>
        </button>
      )
    }
  }

  return (
    <div className=" relative w-[800px] h-[600px] bg-[#181818] rounded-lg flex flex-col">
      <div
        onClick={() => {
          setSelectedId(null)
        }}
        className="w-5 z-50 h-5 sm:p-5 md:p-6 rounded-full bg-black flex items-center justify-center self-end absolute top-2 right-2 opacity-50 hover:opacity-100 duration-300 cursor-pointer"
      >
        <i className="fa-solid fa-xmark text-white md:text-xl sm:text-lg"></i>
      </div>
      <div className="absolute w-full h-[50%] bg-gradient-to-b from-transparent via-transparent to-[#181818]"></div>
      <img
        src={
          modalMovie?.backdrop_path
            ? `https://image.tmdb.org/t/p/original/${modalMovie?.backdrop_path}`
            : bg
        }
        alt=""
        className=" w-full h-[50%] object-cover rounded-tl-lg rounded-tr-lg"
      />
      <div className="w-full h-[50%] p-3 text-white">
        <div className="flex items-center justify-between mb-4">
          <h1
            className="md:text-4xl md:text-start sm:text-xl sm:text-center
                    font-extrabold"
          >
            {modalMovie?.title}
          </h1>
          {userInfo?.email ? (
            heartIcon()
          ) : (
            <p
              className="bg-slate-800 p-2 rounded-md opacity-50 hover:opacity-100 duration-300 cursor-pointer"
              onClick={() => {
                setSelectedId(null)
                navigate("/login")
              }}
            >
              Login to save this movie
            </p>
          )}
        </div>
        <div className="w-[100%] h-[calc(100%-40px)] overflow-y-auto">
          <div className="sm:w-full md:w-[40%] flex items-center justify-between mb-4 opacity-50">
            <p className="mr-3">{modalMovie?.release_date.slice(0, 4)}</p>
            <p>{modalMovie?.runtime} min</p>
            <p className="ml-3">
              {Math.round(modalMovie?.vote_average * 10) / 10}/10{" "}
              <i className="fa-solid fa-star text-red-600"></i>
            </p>
          </div>
          <div className="flex sm:justify-between md:justify-start opacity-50 mb-4">
            {modalMovie?.genres.map((genre, i) => (
              <p key={i} className="mr-4 last:mr-0">
                {genre.name}
              </p>
            ))}
          </div>
          <div className="italic">
            {/*eslint-disable-next-line react/no-unescaped-entities*/}
            <p>"{modalMovie?.overview}"</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailsModal
