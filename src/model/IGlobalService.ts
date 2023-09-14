import FoodService from "../services/http/FoodService";

interface IGlobalService {
    foodService: FoodService;
}

export default IGlobalService;
