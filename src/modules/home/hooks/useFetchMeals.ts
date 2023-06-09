import { useState, useEffect } from "react";
import axios from "axios";
import { MealBackendModel, MealResponseModel } from "../models/MealModel";

export const useFetchMeals = (category: string) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;

  const [meals, setMeals] = useState<MealBackendModel[]>([]);

  const getMeals = async () => {
    const response = await axios.get<MealResponseModel>(URL);

    if (response.data.meals.length >= 10) {
      const firstTenMeals = response.data.meals.slice(0, 10);
      setMeals(firstTenMeals);
    } else {
      setMeals(response.data.meals);
    }
  };

  useEffect(() => {
    getMeals();
  }, [category]);

  return { meals, setMeals };
};
