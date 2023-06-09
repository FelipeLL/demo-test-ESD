import { Box, Typography } from "@mui/material";

interface Props {
  label: string;
  icon: any;
  categoryMeal: string;
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

export const RecipeCategory: React.FC<Props> = ({
  label,
  icon,
  categoryMeal,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "5px",
        width: "100%",
        height: "40px",
        borderRadius: "25px",
        color: selectedCategory === categoryMeal ? "white" : "black",
        backgroundColor:
          selectedCategory === categoryMeal ? "#ef4c00" : "#F4F9FF",
        cursor: "pointer",
        "&:hover": {
          color: "white",
          backgroundColor: "#ef4c00",
        },
      }}
      onClick={() => setSelectedCategory(categoryMeal)}
    >
      {icon}
      <Typography sx={{ fontSize: "14px" }}>{label}</Typography>
    </Box>
  );
};
