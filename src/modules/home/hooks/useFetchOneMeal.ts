import { useState, useEffect } from "react";
import axios from "axios";
import {
  MealDetailBackendModel,
  MealDetailResponseModel,
} from "../models/MealModel";

export const useFetchOneMeal = (idMeal: string | undefined) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;

  const [meal, setMeal] = useState<MealDetailBackendModel>();

  const getOneMeal = async () => {
    const response = await axios.get<MealDetailResponseModel>(URL);
    setMeal(response.data.meals[0]);
  };

  useEffect(() => {
    if (idMeal) {
      getOneMeal();
    }
  }, []);

  return { meal, setMeal };
};
