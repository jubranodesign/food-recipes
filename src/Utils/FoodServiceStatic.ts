class FoodServiceStatic {
    private static urlAllFoodCategories: string = "https://www.themealdb.com/api/json/v1/1/categories.php";
    private static urlRecipesByCategory: string = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";
    private static urlInstructionsByRecipe: string = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

    private static async fetchDataFromAPI(url: string): Promise<Response> {
        return await fetch(url);
    }

    private static async convertResponseToJSON<Type>(res: Response): Promise<Type> {
        return await res.json();
    }

    public static async getAllFoodCategories<Type>(): Promise<Type> {
        const response = await this.fetchDataFromAPI(this.urlAllFoodCategories);
        const data = await this.convertResponseToJSON<{ categories: Type }>(response);
        return data.categories;
    }

    public static async getAllRecipesByCategory<Type>(category: string): Promise<Type> {
        const response = await this.fetchDataFromAPI(this.urlRecipesByCategory + category);
        const data = await this.convertResponseToJSON<{ meals: Type }>(response);
        return data.meals;
    }

    public static async getInstructionsByRecipe<Type>(idMeal: number): Promise<Type> {
        const response = await this.fetchDataFromAPI(this.urlInstructionsByRecipe + idMeal);
        const data = await this.convertResponseToJSON<{ meals: Type }>(response);
        return data.meals;
    }

}

export default FoodServiceStatic;
