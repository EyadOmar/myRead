import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import BooksList from "./components/BooksList";
import Search from "./components/Search";
import NotFound from "./components/NotFound";
import * as BooksApi from "./BooksAPI";

function App() {
  // const [showSearchPage, setShowSearchpage] = useState(false);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksApi.getAll();
      setBooks(res);
    };

    getBooks();
  }, []);

  const updateShelf = async (book, shelf) => {
    await BooksApi.update(book, shelf);
    const res = await BooksApi.getAll();
    setBooks(res);
  };

  return (
    <div className="app">
      <Routes>
        <Route path="/search" element={<Search />} />
        <Route
          exact
          path="/"
          element={<BooksList books={books} updateShelf={updateShelf} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
