import { useRecipeStore } from './recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  return (
    <button
      style={{ marginTop: '10px', color: 'white', background: 'red' }}
      onClick={() => deleteRecipe(recipeId)}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
