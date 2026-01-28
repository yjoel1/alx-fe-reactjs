import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: '20px' }}>
        <h1>Recipe Sharing App</h1>
        <AddRecipeForm />
        <RecipeList />
      </div>

      <Routes>
        <Route
          path="/recipes/:recipeId"
          element={<RecipeDetailsWrapper />}
        />
      </Routes>
    </BrowserRouter>
  );
}

// Wrapper to get route params
import { useParams } from 'react-router-dom';
const RecipeDetailsWrapper = () => {
  const { recipeId } = useParams();
  return <RecipeDetails recipeId={recipeId} />;
};

export default App;

