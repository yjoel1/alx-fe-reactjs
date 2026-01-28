import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  setRecipes: (recipes) =>
    set({
      recipes,
      filteredRecipes: recipes.filter((recipe) =>
        recipe.title
          .toLowerCase()
          .includes(get().searchTerm.toLowerCase())
      ),
    }),

  addRecipe: (newRecipe) =>
    set((state) => {
      const updatedRecipes = [...state.recipes, newRecipe];
      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes.filter((recipe) =>
          recipe.title
            .toLowerCase()
            .includes(state.searchTerm.toLowerCase())
        ),
      };
    }),

  updateRecipe: (id, updatedData) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedData } : recipe
      );
      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes.filter((recipe) =>
          recipe.title
            .toLowerCase()
            .includes(state.searchTerm.toLowerCase())
        ),
      };
    }),

  deleteRecipe: (id) =>
    set((state) => {
      const updatedRecipes = state.recipes.filter(
        (recipe) => recipe.id !== id
      );
      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes.filter((recipe) =>
          recipe.title
            .toLowerCase()
            .includes(state.searchTerm.toLowerCase())
        ),
      };
    }),

  setSearchTerm: (term) => {
    const recipes = get().recipes;
    set({
      searchTerm: term,
      filteredRecipes: recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      ),
    });
  },
}));
