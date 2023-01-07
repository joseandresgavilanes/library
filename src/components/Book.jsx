import React from "react";
import { Link } from "react-router-dom";

const Book = ({ item }) => {
  return (
    <div>
      <Link to={`/view/${item.id}`}>
        <img src={item.cover} alt={item.title} width="200" />
        <div> {item.title} </div>
      </Link>
    </div>
  );
};

export default Book;
