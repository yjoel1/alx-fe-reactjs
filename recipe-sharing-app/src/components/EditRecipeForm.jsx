import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const [editing, setEditing] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // ✅ REQUIRED
    updateRecipe(recipe.id, { title, description });
    setEditing(false);
  };

  if (!editing) {
    return <button onClick={() => setEditing(true)}>Edit Recipe</button>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <button type="submit">Save</button>
      <button type="button" onClick={() => setEditing(false)}>
        Cancel
      </button>
    </form>
  );
};

export default EditRecipeForm;
