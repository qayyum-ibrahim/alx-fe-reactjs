import { useRecipeStore } from "./recipeStore";
import { useMemo } from "react";

const FavoritesList = () => {
  const favorites = useRecipeStore((state) => state.favorites);
  const recipes = useRecipeStore((state) => state.recipes);

  const favoriteRecipes = useMemo(() => {
    return favorites
      .map((id) => recipes.find((r) => r.id === id))
      .filter(Boolean);
  }, [favorites, recipes]);

  if (favoriteRecipes.length === 0) return <p>No favorite recipes yet.</p>;

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">My Favorites</h2>
      {favoriteRecipes.map((recipe) => (
        <div key={recipe.id} className="p-2 border mb-2">
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
