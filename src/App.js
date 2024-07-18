import React, { useState,useEffect} from "react";
import SearchBar from "./components/SearchBar";
import MovieCard from "./components/MovieCard";
import { GridLoader } from "react-spinners";
import { fetchMovies } from "./utils/api";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (query) => {
    setLoading(true);
    setError("");
    try {
      const results = await fetchMovies(query);
      setMovies(results);
    } catch (error) {
      setError("Failed to fetch movies. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleSearch("tranding");
  },[])
  console.log(movies)
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <h1 className="text-4xl font-bold mt-8">Movie Search</h1>
      <SearchBar onSearch={handleSearch} />
      {loading ? (
        <div className="h-[80vh] flex justify-center flex-col items-center">
          <GridLoader color={"#2563eb"} size={20}/>
        </div>
      ) : error ? (
        <div className="text-red-500 mt-4">{error}</div>
      ) : (
        <div className="flex flex-wrap justify-center mt-8">
          {movies.map((movie) => (
            <MovieCard key={movie.key} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
