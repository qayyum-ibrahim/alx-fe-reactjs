import { useNavigate } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const navigate = useNavigate();
  if (filteredRecipes.length === 0) return <p>No matching recipes.</p>;

  return (
    <div>
      <h2>Filtered Recipes</h2>
      {filteredRecipes.map((recipe) => (
        <div key={recipe.id} className="mb-4 p-2 border">
          <div onClick={() => navigate(`/recipe/${recipe.id}`)}>
            <h3 className="text-blue-600 underline">{recipe.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
