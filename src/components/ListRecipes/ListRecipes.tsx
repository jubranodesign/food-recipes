import './ListRecipes.css';
import IRecipe from '../../model/IRecipe';
import Recipe from '../Recipe/Recipe';

export default function ListRecipes(props: { recipe: IRecipe[] }) {

    if (props.recipe === null || props.recipe === undefined || props.recipe.length === 0) return (<div id="recipesMainDisplay"><h2>Choose Recipes Category from the Menu</h2></div>)

    return (
        <div id="recipesMainDisplay">
            {props.recipe.map((curr) => (<Recipe key={curr.idMeal} recipe={curr} />))}
        </div>
    )
}
