export default function getDetails(id) {
  return `https://api.themoviedb.org/3/movie/${id}?api_key=${
    import.meta.env.VITE_API_KEY
  }`
}
