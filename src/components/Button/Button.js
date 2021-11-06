import React, { useEffect, useState } from "react";
import "../Button/Button.css";
import { useHomeFetch } from "../../useHomeFetch";

const Button = ({ setIsLoadingMore, page, setPage }) => {
  function handlePage() {
    setIsLoadingMore(true);

    setPage((prev) => prev + 1);
  }

  return (
    <div className="button-container">
      <button className="load-more" onClick={handlePage}>
        Load More
      </button>
    </div>
  );
};

export default Button;
