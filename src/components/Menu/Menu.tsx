import './Menu.css';
import IFood from '../../model/IFood';
import IRecipe from '../../model/IRecipe';
import { useContext, useEffect, useState } from 'react';
import AppContext from '../../Contexts/AppContext';
import { useQuery } from '@tanstack/react-query';

export default function Menu(props: { categories: IFood[] | undefined, onRecipe: any }) {
    const [category, setcategory] = useState<string>("");
    const services = useContext(AppContext);
    const { data: recipes } = useQuery(['recipes', category], () => services?.foodService.getAllRecipesByCategory<IRecipe[]>(category));

    useEffect(() => {
        props.onRecipe(recipes);
    }, [recipes])

    function toggleMenu() {
        const categoriesMenu = document.querySelector(".categoriesMenu") as HTMLElement;
        categoriesMenu.classList.toggle('hdn');
    }

    function showCategoryByName(cat: string) {
        if (cat !== category) {
            setcategory(cat);
        }
    }

    return (
        <div id="menuContainer">
            <div className="categoriesMenu hdn">
                <ul>
                    {props.categories?.map((curr) => (<li key={curr.idCategory} className='foodCategoriesListItem' onClick={() => showCategoryByName(curr.strCategory)}>{curr.strCategory}</li>))}
                </ul>
            </div>

            <div onClick={toggleMenu}>
                <span className="material-symbols-outlined">
                    menu
                </span>
            </div>
        </div>
    )
}
