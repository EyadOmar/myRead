import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";

const Shelf = ({ shelfTitle }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          <Book />
          <Book />
        </ol>
      </div>
    </div>
  );
};

Shelf.propTypes = {
  shelfTitle: PropTypes.string.isRequired,
};

export default Shelf;
