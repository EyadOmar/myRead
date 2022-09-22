import React from "react";
import PropTypes from "prop-types";

const Book = ({ book, updateShelf }) => {
  const shelfs = [
    {
      id: 1,
      shelfName: "currentlyReading",
      shelfDisplayName: "Currently Reading",
    },
    {
      id: 2,
      shelfName: "wantToRead",
      shelfDisplayName: "Want to Read",
    },
    {
      id: 3,
      shelfName: "read",
      shelfDisplayName: "Read",
    },
    {
      id: 4,
      shelfName: "none",
      shelfDisplayName: "None",
    },
  ];

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${
                book.imageLinks ? book.imageLinks.thumbnail : ""
              })`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select
              onChange={(e) => updateShelf(book, e.target.value)}
              value={book.shelf ? book.shelf : "none"}
            >
              <option value="moveTo" disabled>
                Move to...
              </option>
              {shelfs.map((shelf) => (
                <option key={shelf.id} value={shelf.shelfName}>
                  {shelf.shelfDisplayName}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors ? book.authors : ""}</div>
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  updateShelf: PropTypes.func.isRequired,
};

export default Book;
