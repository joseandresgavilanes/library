import { useEffect, useState } from "react";
import Book from "../Components/Book";
import Search from "../Components/Search";
import SimpleSlider from "../components/SimpleSlider";
import { useBook } from "../Hooks/useBook";
import { useAppContext } from "../Store/store";
import "../Styles/homePage.css";
const HomePage = () => {
  const store = useAppContext();
  const [books, setBooks] = useState(store.items);

  const [inputText, setInputText] = useState();
  const [googleSearchedBooks, setWordToSearch] = useBook(inputText);

  useEffect(() => {
    setWordToSearch(inputText);
  }, [inputText]);

  function findItems(bookTitke) {
    if (bookTitke == "") {
      setBooks(store.items);
    } else {
      setBooks(store.searchItems(bookTitke));
      setInputText(bookTitke);
    }
  }

  function cancelSearch() {
    setBooks(store.items);
  }
  return (
    <div>
      <SimpleSlider />
      <div className="banner">
        <img className="pile__books" src="/pile.png" alt="" />
        <Search findItems={findItems} cancelSearch={cancelSearch} />
      </div>
      <div className="content">
        <h2 style={{ color: "#9191915f", fontSize: "30px" }}>Your books</h2>
        {books.length > 0 ? (
          <div className="grid">
            {books.map((it) => {
              return (
                <Book
                  key={it.id}
                  title={it.title}
                  cover={it.cover}
                  author={it.author}
                  id={it.id}
                />
              );
            })}
          </div>
        ) : (
          <div className="loader">No books...</div>
        )}
        <h2 style={{ color: "#9191915f", fontSize: "30px" }}>Our books</h2>
        {googleSearchedBooks && googleSearchedBooks.length > 0 ? (
          <div className="grid">
            {googleSearchedBooks.map((it) => {
              return (
                <Book
                  key={it.id}
                  title={it.title}
                  cover={it.cover}
                  author={it.author}
                  id={it.id}
                />
              );
            })}
          </div>
        ) : (
          <div className="loader">No books on our stock</div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
