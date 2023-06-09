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

const recipeCategoryInfo = [
  {
    label: "Break Fast",
    icon: <LunchDining />,
  },
  {
    label: "Lunch",
    icon: <Restaurant />,
  },
  {
    label: "Drinks",
    icon: <Liquor />,
  },
  {
    label: "Desserts",
    icon: <Cake />,
  },
  {
    label: "Fastfood",
    icon: <Fastfood />,
  },
];

export const RecipesContainer: React.FC = () => {
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
          <RecipeCategory label={category.label} icon={category.icon} />
        ))}
      </Stack>

      <Grid container spacing={3} sx={{ mt: 5 }}>
        <Grid item xs={12} md={6} lg={4}>
          <Recipe />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Recipe />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Recipe />
        </Grid>
      </Grid>
    </Box>
  );
};
