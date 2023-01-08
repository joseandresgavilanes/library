import { Link } from "react-router-dom";
import "../Styles/book.css";
const Book = ({ title, cover, author, id }) => {
  let authorToString = "";
  if (author) {
    if (author.toString().length > 15) {
      console.log("here the author is", author);
      authorToString = author.toString().substring(0, 15);
    } else {
      authorToString = author.toString();
    }
  } else {
    console.log("author is", author);
    authorToString = "uknown";
  }

  return (
    <div className="bookContainer">
      <img src={cover} />
      <div className="bookMainDetails">
        <div className="bookTitle">
          {title.length > 15 ? title.substring(0, 15) : title}
        </div>
        <div className="bookAuthor">{authorToString}</div>
        <Link to={`/book/${id}`}>
          {" "}
          <button className="details">Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Book;
