import React from "react";
import PropTypes from "prop-types";
import Shelf from "./Shelf";
import { Link } from "react-router-dom";

const BooksList = ({}) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Shelf shelfTitle="Currently Reading" />
          <Shelf shelfTitle="Want to Read" />
          <Shelf shelfTitle="Reading" />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

BooksList.propTypes = {};

export default BooksList;
