import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../Store/store";
import "../Styles/createPage.css";
import "../Styles/toogle.css";

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [cover, setCover] = useState("");
  const [intro, setIntro] = useState("");
  const [completed, setCompleted] = useState(false);
  const [review, setReview] = useState("");
  const [warningMessage, setWarningMessage] = useState();
  const [warningStyle, setWarningStyle] = useState();
  const warningRef = useRef(null);

  const store = useAppContext();

  const inputStyles = {
    formMainContainer: {
      display: "flex",
      with: "100%",
      padding: "50px 0 0 0",
      position: "relative",
    },

    formImage: {
      width: "60%",
    },
    formImageImg: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },

    formContainer: {
      width: "40%",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "1em",
      margin: "15px 0",
      with: "100%",
    },
    title: {
      fontSize: "22px",
      color: "rgb(198, 198, 198)",
      textAlign: "left",
    },
    input: {
      padding: "20px",
      borderRadius: "5px",
      fontSize: "16px",
      border: "none",
    },
    spanImportant: {
      color: "red",
      fontSize: "1.2rem",
    },
  };

  function handleChange(e) {
    switch (e.target.name) {
      case "title":
        setTitle(e.target.value);
        break;
      case "author":
        setAuthor(e.target.value);
        break;
      case "intro":
        setIntro(e.target.value);
        break;
      case "completed":
        setCompleted(e.target.checked);
        break;
      case "review":
        setReview(e.target.value);
        break;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newBook = {
      id: crypto.randomUUID(),
      title,
      author,
      cover,
      intro,
      completed,
      review,
    };
    if (checkBookDetails(newBook)) {
      store.createItem(newBook);

      document.getElementById("form").reset();
      setTitle("");
      setAuthor("");
      setIntro("");
      setReview("");
      setCover("");
      warningRef.current.style.display = "block";
      setWarningStyle("success");
      setWarningMessage("The book has been created successfully");
      setTimeout(() => {
        warningRef.current.style.display = "none";
      }, 2000);
    } else {
      setWarningMessage("Please make sure you filled the requierd info");
      setWarningStyle("warning");
      warningRef.current.style.display = "block";
      setTimeout(() => {
        warningRef.current.style.display = "none";
      }, 2000);
    }
  }

  function checkBookDetails(book) {
    return !book.title || !book.author || !book.cover ? false : true;
  }

  function handleOnChangeFile(e) {
    const element = e.target;
    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
      console.log("RESULT", reader.result);
      setCover(reader.result.toString());
    };
    reader.readAsDataURL(file);
  }

  return (
    <div className="formMainContainer" style={inputStyles.formMainContainer}>
      <form id="form" onSubmit={handleSubmit} style={inputStyles.formContainer}>
        <button className="formBtn" style={inputStyles.btn}>
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            <i class="fa-solid fa-x"></i>
          </Link>
        </button>
        <div className={warningStyle} ref={warningRef}>
          {warningMessage}
        </div>
        <div style={inputStyles.container}>
          <div style={inputStyles.title}>Title</div>
          <input
            className="input-field"
            id="titleInput"
            type="text"
            name="title"
            style={{ padding: "1em 2em" }}
            onChange={handleChange}
            value={title}
          />
        </div>

        <div style={inputStyles.container}>
          <div style={inputStyles.title}>Author</div>
          <input
            className="input-field"
            type="text"
            name="author"
            onChange={handleChange}
            style={{ padding: "1em 2em" }}
            value={author}
          />
        </div>

        <div style={inputStyles.container}>
          <div style={inputStyles.title}>Cover</div>
          <input type="file" name="cover" onChange={handleOnChangeFile} />
          <div>{!!cover ? <img src={cover} width="200" /> : ""}</div>
        </div>

        <div style={inputStyles.container}>
          <div style={inputStyles.title}>Intro</div>
          <input
            className="input-field"
            style={{ padding: "1em 2em" }}
            type="text"
            name="intro"
            onChange={handleChange}
            value={intro}
          />
        </div>

        <div style={inputStyles.container}>
          <div style={inputStyles.title}>Completed</div>

          <div class="toggler">
            <input
              id="toggler-1"
              onChange={handleChange}
              value={completed}
              name="toggler-1"
              type="checkbox"
            />
            <label for="toggler-1">
              <svg
                class="toggler-on"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 130.2 130.2"
              >
                <polyline
                  class="path check"
                  points="100.2,40.2 51.5,88.8 29.8,67.5"
                ></polyline>
              </svg>
              <svg
                class="toggler-off"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 130.2 130.2"
              >
                <line
                  class="path line"
                  x1="34.4"
                  y1="34.4"
                  x2="95.8"
                  y2="95.8"
                ></line>
                <line
                  class="path line"
                  x1="95.8"
                  y1="34.4"
                  x2="34.4"
                  y2="95.8"
                ></line>
              </svg>
            </label>
          </div>
        </div>

        <div style={inputStyles.container}>
          <div style={inputStyles.title}>Review</div>
          <input
            className="input-field"
            type="text"
            name="review"
            onChange={handleChange}
            value={review}
            style={{ padding: "1em 2em" }}
          />
        </div>

        <input
          type="submit"
          value="Add book"
          style={{
            padding: "15px 20px",
            minWidth: "200px",
            border: "none",
            borderRadius: "30px",
            backgroundColor: "#DAAA63",
            marginTop: "20px",
            color: "white",
            fontWeigth: "bolder",
            fontSize: "18px",
          }}
        />
      </form>

      <div style={inputStyles.formImage}>
        <img
          style={inputStyles.formImageImg}
          src="https://img.zcdn.com.au/lf/8/hash/38024/19054964/4/Natural+Akara+Wooden+Bookshelf.jpg"
          alt=""
        />
        <p></p>
      </div>
    </div>
  );
};

export default CreatePage;
