import { useState } from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import ListRecipes from './components/ListRecipes/ListRecipes';
import IFood from './model/IFood';
import IRecipe from './model/IRecipe';
import FoodService from './services/http/FoodService';
import AppContext from './Contexts/AppContext';
import { useQuery } from '@tanstack/react-query';

function App() {
  const [recipe, setRecipe] = useState<IRecipe[]>([]);
  const services = {
    foodService: new FoodService()
  };
  const { data: foods } = useQuery(['foods'], () => services.foodService.getAllFoodCategories<IFood[]>());

  return (
    <AppContext.Provider value={services}>
      <div id="App">
        <Menu categories={foods} onRecipe={setRecipe} />
        <ListRecipes recipe={recipe} />
      </div>
    </AppContext.Provider>
  );

}

export default App;
