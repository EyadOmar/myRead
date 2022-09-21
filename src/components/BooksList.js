import React from "react";
import PropTypes from "prop-types";
import Shelf from "./Shelf";
import { Link } from "react-router-dom";

const BooksList = ({ books, updateShelf }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Shelf
            shelfTitle="Currently Reading"
            shelfType="currentlyReading"
            books={books}
            updateShelf={updateShelf}
          />
          <Shelf
            shelfTitle="Want to Read"
            shelfType="wantToRead"
            books={books}
            updateShelf={updateShelf}
          />
          <Shelf
            shelfTitle="Read"
            shelfType="read"
            books={books}
            updateShelf={updateShelf}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired,
};

export default BooksList;
