import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppContext } from "../store/Store";
import "../Styles/details.css";

const BookDetail = ({ id }) => {
  const store = useAppContext();
  const [book, setBook] = useState(null);
  const params = useParams();
  useEffect(() => {
    setBook(store.getItem(params.bookId));
  }, [book]);

  return (
    <div className="detailContainer">
      <button className="detailsBtn">
        <Link style={{ textDecoration: "none", color: "white" }} to="/">
          <i class="fa-solid fa-x"></i>
        </Link>
      </button>
      <img src={book?.cover} className="detailsImg" />
      {book != null ? (
        <div className="detailsInfo">
          <div className="detailsTitle">{book?.title}</div>
          <div className="detailsAuthor">By: {book?.author}</div>
          <div>
            <span className="detailsSpan" style={{ margin: "20px 0" }}>
              Introduction
            </span>
            <br />
            <div className="detailsReview">
              {book.intro ? book.intro : "No intro available yet"}
            </div>
            <div className="detailsSpan" style={{ margin: "20px 0" }}>
              Completed{" "}
              {book.completed ? (
                <p className="detailsCompleted">✔</p>
              ) : (
                <p className="detailsCompleted">X</p>
              )}
            </div>
            <span className="detailsSpan">Review</span>
            <br />
            <div className="detailsReview" style={{ margin: "20px 0" }}>
              {book.review ? book.review : "No reviews yet"}
            </div>
          </div>
        </div>
      ) : (
        "Loading"
      )}
    </div>
  );
};

export default BookDetail;
