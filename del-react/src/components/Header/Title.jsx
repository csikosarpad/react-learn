import React from "react";
import PropTypes from "prop-types";

const Title = () => {
  return (
    <>
      <h1>
        <b>netflix</b>roulette
      </h1>
    </>
  );
};

Title.propTypes = {
  title: PropTypes.string,
};

export default Title;
