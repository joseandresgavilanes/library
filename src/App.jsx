import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookDetail from "./Pages/BookDetail";
import CreatePage from "./Pages/CreatePage";
import HomePage from "./Pages/HomePage";
import Navbar from "./pages/Navbar";
import Store from "./Store/store";

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
