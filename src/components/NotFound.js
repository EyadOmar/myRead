import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>404 Not Found</h2>
      <h3>
        <Link to="/">Home</Link>
      </h3>
    </div>
  );
};

export default NotFound;
