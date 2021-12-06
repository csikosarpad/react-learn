import { useState, useEffect } from "react";

const useGetMovies = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [moviesdata, setMoviesData] = useState([]);
    //http://localhost:4000/movies?limit=20
    const limit = 9;
    const apiUrl = "http://localhost:4000";
    const getMovieUrl = `${apiUrl}/movies?limit=${limit}`;
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      fetch(getMovieUrl)
        .then((res) => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            console.log("result: ", result.data);
            setMoviesData(result.data);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    }, [getMovieUrl]);
    return [moviesdata, setMoviesData];
  };
  
  export default useGetMovies;