import { Container, Box } from "@mui/material";
import { RecipesContainer } from "./RecipesContainer";

export const HomePage: React.FC = () => {
  return (
    <Container maxWidth="xl" sx={{ mb: { xs: 5, md: 10 } }}>
      <Box sx={{ mt: 12 }}>
        <Box
          component="img"
          src="/main-food.jpg"
          alt="principal food"
          sx={{ width: "100%", borderRadius: 4 }}
        />
      </Box>

      <RecipesContainer />
    </Container>
  );
};
