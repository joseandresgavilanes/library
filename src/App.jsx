import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookDetail from "./pages/BookDetail";
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import Navbar from "./pages/Navbar";
import Store from "./store/Store";

function App() {
  return (
    <div className="App">
      <Store>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create-book" element={<CreatePage />} />
            <Route path="book/:bookId" element={<BookDetail />} />
          </Routes>
        </Router>
      </Store>
    </div>
  );
}

export default App;
