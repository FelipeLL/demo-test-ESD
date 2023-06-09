import {
  Box,
  CircularProgress,
  Container,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useFetchOneMeal } from "../hooks/useFetchOneMeal";
import { AccessTime, Favorite } from "@mui/icons-material";

export const RecipeDetail: React.FC = () => {
  const { id } = useParams();
  const { meal } = useFetchOneMeal(id);

  return meal ? (
    <Container maxWidth="lg" sx={{ mb: { xs: 5, md: 10 } }}>
      <Box sx={{ mt: 12 }}>
        <Box
          component="img"
          src="/second-food.png"
          alt="second food"
          sx={{
            width: "100%",
            borderRadius: 4,
          }}
        />

        <Box
          mt={3}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <AccessTime sx={{ fontSize: "20px" }} />
          <Typography variant="subtitle2">20-30</Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            mt={2}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "start", md: "center" },
              gap: { xs: 1, md: 5 },
            }}
          >
            <Typography variant="h6" color="secondary">
              {meal.strMeal}
            </Typography>
            <Rating
              name="size-small"
              defaultValue={4}
              size="small"
              readOnly
              sx={{ color: "#ef4c00" }}
            />
          </Box>
          <Favorite color="error" sx={{ fontSize: "35px" }} />
        </Box>

        <Typography variant="caption">32 Reviews</Typography>

        <Stack direction="row" gap={1} sx={{ mt: 2 }}>
          <Box
            sx={{
              width: "100px",
              height: "27px",
              lineHeight: "27px",
              textAlign: "center",
              fontWeight: 300,
              fontSize: "14px",
              borderRadius: "15px",
              backgroundColor: "#f3f4f7",
            }}
          >
            {meal.strArea}
          </Box>

          <Box
            sx={{
              width: "100px",
              height: "27px",
              lineHeight: "27px",
              textAlign: "center",
              fontWeight: 300,
              fontSize: "14px",
              borderRadius: "15px",
              backgroundColor: "#f3f4f7",
            }}
          >
            Italian
          </Box>
        </Stack>

        <Box
          sx={{
            paddingTop: 3,
            paddingLeft: { xs: 2, md: 7 },
            paddingRight: { xs: 2, md: 7 },
          }}
        >
          <Typography variant="body2" color="secondary">
            {meal.strInstructions}
          </Typography>
        </Box>
      </Box>
    </Container>
  ) : (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        mt: 13,
        marginLeft: 5,
      }}
    >
      <CircularProgress />
      <Typography>Cargando...</Typography>
    </Box>
  );
};
