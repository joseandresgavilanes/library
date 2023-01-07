import React from "react";
import { Link } from "react-router-dom";
import Book from "../components/Book";
import { useAppContext } from "../store/Store";

const Index = () => {
  const store = useAppContext();

  return (
    <div>
      {store.items.map((item) => {
        <Book item={item} key={item.id} />;
      })}
    </div>
  );
};

export default Index;
