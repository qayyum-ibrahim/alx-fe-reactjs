import { useMemo } from "react";
import { useRecipeStore } from "./recipeStore";

const FavoriteButton = ({ recipeId }) => {
  const favorites = useRecipeStore((state) => state.favorites);
  const recipes = useRecipeStore((state) => state.recipes);

  const favoriteRecipes = useMemo(() => {
    return favorites
      .map((id) => recipes.find((r) => r.id === id))
      .filter(Boolean);
  }, [favorites, recipes]);

  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const isFavorited = favoriteRecipes.includes(recipeId);

  const toggleFavorite = () => {
    if (isFavorited) {
      removeFavorite(recipeId);
    } else {
      addFavorite(recipeId);
    }
  };

  return (
    <button
      onClick={toggleFavorite}
      className={`px-3 py-1 rounded ${
        isFavorited ? "bg-yellow-500 text-white" : "bg-gray-300"
      }`}
    >
      {isFavorited ? "★ Favorited" : "☆ Favorite"}
    </button>
  );
};

export default FavoriteButton;
