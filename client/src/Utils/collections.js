import { v4 as uuidv4 } from "uuid"

const collections = [
  {
    title: "Popular",
    url: `https://api.themoviedb.org/3/movie/popular?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US&page=1`,
    id: uuidv4(),
  },
  {
    title: "Top Rated",
    url: `https://api.themoviedb.org/3/movie/top_rated?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US&page=1`,
    id: uuidv4(),
  },
  {
    title: "Upcoming",
    url: `https://api.themoviedb.org/3/movie/upcoming?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US&page=1`,
    id: uuidv4(),
  },
  {
    title: "Now Playing",
    url: `https://api.themoviedb.org/3/movie/now_playing?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US&page=1`,
    id: uuidv4(),
  },
]

export default collections
