import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Create from "./pages/Create";
import Index from "./pages/Index";
import View from "./pages/View";
import Store from "./store/Store";

function App() {
  return (
    <Store>
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="create" element={<Create />} />
          <Route path="view/:bookId" element={<View />} />
        </Routes>
      </BrowserRouter>
    </Store>
  );
}

export default App;
