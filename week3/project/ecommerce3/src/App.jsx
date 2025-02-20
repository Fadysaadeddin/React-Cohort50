import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import FavoritesPage from "./FavoritesPage";
import Navbar from "./Navbar";
import CategoryNavbar from "./CategoryNavbar";
import { AppProvider } from "./AppContext"; 
import "./App.css";

const App = () => {
  return (
    <AppProvider>
      <Router>
        <Navbar />
        <CategoryNavbar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/favourites" element={<FavoritesPage />} />
        </Routes>
      </Router>
    </AppProvider>
  );
};

export default App;
