import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../store/Store";

const View = () => {
  const [item, setItem] = useState({});
  const params = useParams();
  const store = useAppContext();

  useEffect(() => {
    const book = store.getItem(params.booKId);
    setItem(book);
  }, []);

  return (
    <>
      <h2>{item?.title}</h2>
      <div>{item?.cover ? <img src={item.cover} width="400" /> : ""}</div>
      <div>{item?.author}</div>
      <div>{item?.intro}</div>
      <div>{item?.completed ? "Completado" : "No terminado"}</div>
      <div>{item?.review}</div>
    </>
  );
};

export default View;
