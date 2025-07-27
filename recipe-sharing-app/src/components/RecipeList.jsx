import { useRecipeStore } from "./recipeStore";

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  if (filteredRecipes.length === 0) return <p>No matching recipes.</p>;

  return (
    <div>
      <h2>Filtered Recipes</h2>
      {filteredRecipes.map((recipe) => (
        <div key={recipe.id} className="mb-4 p-2 border">
          <Link to={`/recipe/${recipe.id}`}>
            <h3 className="text-blue-600 underline">{recipe.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
