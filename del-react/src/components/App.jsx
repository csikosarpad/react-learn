import React, { useState, useEffect } from "react";
import "./Styles/index.scss";
//import moviesdata from "../data/movies.json";
import Header from "./Header/Header.jsx";
import Results from "./Results/Index.jsx";
import Footer from "./Footer/Footer.jsx";
import Modal from "./Modal/index.jsx";
import MovieDetails from "./MovieDetails/MovieDetails.jsx";

const useGetMovies = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [moviesdata, setMoviesData] = useState([]);
  //http://localhost:4000/movies?limit=20
  const limit = 20;
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
  }, []);
  return [moviesdata];
};

const App = (props) => {
  const [moviesData, setMoviesData] = useGetMovies();
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [showMovieDetails, setShowMovieDetails] = useState(false);
  const [currentMovie, setCurrentMovie] = useState(null);

  const toggleModal = (e) => {
    setShowModal((show) => !show);
  };

  const addMovie = (e) => {
    setModalContent({ action: "add", title: "Add Movie" });
    toggleModal();
  };

  const showSelectedMovie = (movieId) => {
    if (movieId) {
      const actMovie = moviesData.find((item) => item.id === movieId);
      setCurrentMovie(actMovie);
      setShowMovieDetails(true);
    } else {
      setShowMovieDetails(false);
    }
  };

  const sortbyTitle = (a, b) => {
    var nameA = a.title.toUpperCase();
    var nameB = b.title.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  };
  const sortbyDate = (a, b) => {
    var dateA = a.release;
    var dateB = b.release;
    if (dateA < dateB) {
      return -1;
    }
    if (dateA > dateB) {
      return 1;
    }
    return 0;
  };

  const sortItems = (item) => {
    // eslint-disable-next-line default-case
    switch (item) {
      case "releasedate":
        setMoviesData((moviesData) => {
          return [...moviesData.sort(sortbyDate)];
        });
        break;
      case "movietitle":
        setMoviesData((moviesData) => {
          return [...moviesData.sort(sortbyTitle)];
        });
        break;
    }
  };

  const editMovie = (itemId) => {
    const currentMovie = moviesData.find((item) => item.id === itemId);
    setCurrentMovie(currentMovie);
    setModalContent({
      action: "edit",
      title: "Edit Movie",
      currentMovie: currentMovie,
    });
    toggleModal();
  };

  const deleteMovie = (itemId) => {
    setModalContent({
      action: "delete",
      actions: {
        confirmDelete: () => {
          setMoviesData((movieList) => {
            return movieList.filter((item) => item.id !== itemId);
          });
          toggleModal();
        },
      },
      title: "Delete Movie",
    });
    toggleModal();
  };

  return (
    <div className="App">
      {!showMovieDetails && <Header actions={{ addMovie }} />}
      {showMovieDetails && (
        <MovieDetails
          moviesData={currentMovie}
          actions={{ showSelectedMovie }}
        />
      )}
      <Results
        moviesdata={moviesData}
        actions={{ editMovie, deleteMovie, showSelectedMovie, sortItems }}
      />
      <Footer>
        <p>
          <b>netflix</b>roulette
        </p>
      </Footer>
      <Modal {...modalContent} onClose={toggleModal} show={showModal}></Modal>
    </div>
  );
};

export default App;
