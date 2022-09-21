import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";

const Shelf = ({ shelfTitle, shelfType, books, updateShelf }) => {
  const booksCategorized = books.filter((book) => book.shelf === shelfType);

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {booksCategorized.map((book) => (
            <Book key={book.id} book={book} updateShelf={updateShelf} />
          ))}
        </ol>
      </div>
    </div>
  );
};

Shelf.propTypes = {
  shelfTitle: PropTypes.string.isRequired,
  shelfType: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired,
};

export default Shelf;
