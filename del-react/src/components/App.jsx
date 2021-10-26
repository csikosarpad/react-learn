import React, { useState } from "react";
import "./Styles/index.scss";
import moviesdata from "../data/movies.json";
import Header from "./Header/Header.jsx";
import Results from "./Results/Index.jsx";
import Footer from "./Footer/Footer.jsx";
import Modal from "./Modal/index.jsx";

const App = (props) => {
  const [moviesData, setMoviesData] = useState(moviesdata);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const toggleModal = (e) => {
    setShowModal((show) => !show);
  };

  const addMovie = (e) => {
    setModalContent({ action: "add", title: "Add Movie" });
    toggleModal();
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
    var dateA = a.year;
    var dateB = b.year;
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
    setModalContent({
      action: "edit",
      title: "Edit Movie",
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
      <Header actions={{ addMovie }} />
      <Results
        moviesdata={moviesData}
        actions={{ editMovie, deleteMovie, sortItems }}
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
