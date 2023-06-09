export interface MealResponseModel {
  meals: MealBackendModel[];
}

export interface MealBackendModel {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}
