import React, { useEffect, useState } from "react";
import "./Styles/index.scss";
import moviesdata from "../data/movies.json";
import Header from "./Header/Header.jsx";
import Results from "./Results/Index.jsx";
import Footer from "./Footer/Footer.jsx";
import Modal from "./Modal/index.jsx";
import AddMovie from "./Modal/AddMovie";
import DeleteMovie from "./Modal/DeleteMovie";
import EditMovie from "./Modal/EditMovie";

const App = (props) => {
  const [moviesData, setMoviesData] = useState(moviesdata);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const toggleModal = (e) => {
    setShowModal(!showModal);
  };

  const addMovie = (e) => {
    setModalContent({ action: "add", title: "Add Movie" });
    toggleModal();
  };

  const deleteMovie = (itemId) => {
    setModalContent({ action: "delete", title: "Delete Movie" });
    toggleModal();

    setMoviesData((movieList) => {
      return movieList.filter((item) => item.id !== itemId);
    });
  };

  return (
    <div className="App">
      <Header actions={{ addMovie }} />
      <Results moviesdata={moviesData} actions={{ deleteMovie }} />
      <Footer>
        <p>
          <b>netflix</b>roulette
        </p>
      </Footer>
      <Modal
        onClose={toggleModal}
        show={showModal}
        title={modalContent.title}
        action={modalContent.action}
      >
        {modalContent.action === "delete" && <DeleteMovie />}
        {modalContent.action === "add" && <AddMovie />}
        {modalContent.action === "edit" && <EditMovie />}
      </Modal>
    </div>
  );
};

export default App;
