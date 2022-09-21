import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import BooksList from "./components/BooksList";
import Search from "./components/Search";
import NotFound from "./components/NotFound";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  return (
    <div className="app">
      <Routes>
        <Route path="/search" element={<Search />} />
        <Route exact path="/" element={<BooksList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
