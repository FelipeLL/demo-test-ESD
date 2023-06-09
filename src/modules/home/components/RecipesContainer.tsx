import { Box, Typography, Stack } from "@mui/material";
import {
  LunchDining,
  Restaurant,
  Liquor,
  Cake,
  Fastfood,
} from "@mui/icons-material";
import { RecipeCategory } from "./RecipeCategory";

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

      <Stack direction="row" gap={2} sx={{ mt: 4 }}>
        {recipeCategoryInfo.map((category) => (
          <RecipeCategory label={category.label} icon={category.icon} />
        ))}
      </Stack>
    </Box>
  );
};
