import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/'); 
  };

  return (
    <button
      style={{
        marginTop: '10px',
        color: 'white',
        backgroundColor: 'red',
        padding: '5px 10px',
        border: 'none',
      }}
      onClick={handleDelete}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
