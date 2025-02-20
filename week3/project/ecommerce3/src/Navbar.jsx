import { Link } from "react-router-dom";
import { useAppContext } from "./AppContext";
const Navbar = () => {
  const { favoriteIds, setSelectedCategory } = useAppContext();
  return (
    <nav className="navbar">
      <Link
        to="/"
        className="nav-link"
        onClick={() => setSelectedCategory(null)}
      >
        Home
      </Link>
      <Link to="/favourites" className="nav-link">
        Favourites ({favoriteIds.length})
      </Link>
    </nav>
  );
};

export default Navbar;
