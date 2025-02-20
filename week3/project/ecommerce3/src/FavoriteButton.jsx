import { useAppContext } from "./AppContext";

const FavoriteButton = ({ productId }) => {
  const { favoriteIds, toggleFavorite } = useAppContext();

  const isFavorite = favoriteIds.includes(productId);

  return (
    <button
      className="favorite-btn"
      onClick={(e) => {
        e.stopPropagation();
        toggleFavorite(productId);
      }}
    >
      {isFavorite ? "❤️" : "🤍"}
    </button>
  );
};

export default FavoriteButton;
