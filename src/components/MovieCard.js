import React, { useEffect, useState } from "react";
import { fetchRandomDogImage } from "../utils/api";
import {FadeLoader } from 'react-spinners'

const MovieCard = ({ movie }) => {
  const [dogImage, setDogImage] = useState("");
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const getDogImage = async () => {
        setloading(true);
      const image = await fetchRandomDogImage();
      setloading(false)
      setDogImage(image);
      
    };

    getDogImage();
  }, []);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      {loading ? (
        <div className="flex justify-center items-center h-1/2">
          <FadeLoader />
        </div>
      ) : (
        <img className="w-full h-[50vh]" src={dogImage} alt="Dog" />
      )}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{movie.title}</div>
        <p className="text-gray-700 text-base">
          {movie.author_name ? movie.author_name.join(", ") : "Unknown Author"}
        </p>
        <p className="text-gray-700 text-base">{movie.first_publish_year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
