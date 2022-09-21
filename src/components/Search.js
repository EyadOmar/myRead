import { search } from "../BooksAPI";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState } from "react";
import Book from "./Book";

const Search = ({ updateShelf }) => {
  const [query, setQuery] = useState("");
  const [searchBooks, setSearchBooks] = useState([]);

  const handleChange = async (e) => {
    try {
      let value = e.target.value;
      setQuery(value);
      if (value.trim()) {
        const res = await search(value);
        if (res.error) setSearchBooks([]);
        else setSearchBooks(res);
      } else {
        setSearchBooks([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={handleChange}
            value={query}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchBooks.length > 0 &&
            searchBooks.map((book) => (
              <Book key={book.id} book={book} updateShelf={updateShelf} />
            ))}
        </ol>
      </div>
    </div>
  );
};

Search.propTypes = {
  updateShelf: PropTypes.func.isRequired,
};

export default Search;
