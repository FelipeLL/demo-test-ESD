export interface MealResponseModel {
  meals: MealBackendModel[];
}

export interface MealBackendModel {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

export interface MealDetailResponseModel {
  meals: MealDetailBackendModel[];
}

export interface MealDetailBackendModel {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strArea: string;
  strInstructions: string;
}
