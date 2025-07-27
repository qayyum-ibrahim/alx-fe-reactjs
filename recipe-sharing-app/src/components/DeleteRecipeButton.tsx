import { useRecipeStore } from "./recipeStore";

const DeleteRecipeButton = ({ recipeId, onDelete }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    deleteRecipe(recipeId);
    onDelete?.(); // navigate or custom callback
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 text-white px-4 py-2 mt-2"
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
