import { Box, Typography, Stack, Grid } from "@mui/material";
import {
  LunchDining,
  Restaurant,
  Liquor,
  Cake,
  Fastfood,
} from "@mui/icons-material";
import { RecipeCategory } from "./RecipeCategory";
import { Recipe } from "./Recipe";
import { useFetchMeals } from "../hooks/useFetchMeals";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const recipeCategoryInfo = [
  {
    id: "1",
    label: "Lunch",
    categoryMeal: "Pork",
    icon: <LunchDining />,
  },
  {
    id: "2",
    label: "Break Fast",
    categoryMeal: "Breakfast",
    icon: <Restaurant />,
  },
  {
    id: "3",
    label: "Drinks",
    categoryMeal: "Starter",
    icon: <Liquor />,
  },
  {
    id: "4",
    label: "Desserts",
    categoryMeal: "Dessert",
    icon: <Cake />,
  },
  {
    id: "5",
    label: "Fastfood",
    categoryMeal: "Seafood",
    icon: <Fastfood />,
  },
];

export const RecipesContainer: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("Pork");

  const navigate = useNavigate();
  const { meals } = useFetchMeals(selectedCategory);

  return (
    <Box sx={{ mt: 2 }}>
      <Typography
        sx={{
          fontSize: "18px",
          fontWeight: 600,
        }}
        color="secondary"
      >
        RECETAS
      </Typography>

      <Stack
        direction={{ xs: "column", md: "row" }}
        gap={{ xs: 1.5, md: 2 }}
        sx={{ mt: 4 }}
      >
        {recipeCategoryInfo.map((category) => (
          <Box sx={{ width: "100%" }} key={category.id}>
            <RecipeCategory
              label={category.label}
              icon={category.icon}
              categoryMeal={category.categoryMeal}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </Box>
        ))}
      </Stack>

      <Grid container spacing={3} sx={{ mt: { xs: 2, md: 5 } }}>
        {meals.map((meal) => (
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            key={meal.idMeal}
            onClick={() => {
              navigate(`/meal/${meal.idMeal}`);
            }}
          >
            <Recipe title={meal.strMeal} image={meal.strMealThumb} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
