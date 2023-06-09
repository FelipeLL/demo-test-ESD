import { Favorite, AccessTime } from "@mui/icons-material";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Box,
  Rating,
  Stack,
} from "@mui/material";

interface Props {
  title: string;
  image: string;
}

export const Recipe: React.FC<Props> = ({ title, image }) => {
  return (
    <Card sx={{ width: "100%", borderRadius: "20px" }}>
      <CardActionArea>
        <CardMedia component="img" height="170" image={image} alt="img" />
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              gutterBottom
              variant="subtitle1"
              component="div"
              color="secondary"
              sx={{
                fontWeight: 500,
              }}
            >
              {title}
            </Typography>
            <Favorite color="error" />
          </Box>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Rating
              name="size-small"
              defaultValue={4}
              size="small"
              readOnly
              sx={{ color: "#ef4c00" }}
            />

            <Typography variant="body2">32 reviews</Typography>
          </Box>
          <Box mt={2} sx={{ display: "flex", justifyContent: "space-between" }}>
            <Stack direction="row" gap={1}>
              <Box
                sx={{
                  width: "80px",
                  height: "30px",
                  lineHeight: "30px",
                  textAlign: "center",
                  borderRadius: "15px",
                  backgroundColor: "#f3f4f7",
                }}
              >
                Indian
              </Box>

              <Box
                sx={{
                  width: "80px",
                  height: "30px",
                  lineHeight: "30px",
                  textAlign: "center",
                  borderRadius: "15px",
                  backgroundColor: "#f3f4f7",
                }}
              >
                Italian
              </Box>
            </Stack>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <AccessTime sx={{ fontSize: "20px" }} />
              <Typography variant="subtitle2">15-25</Typography>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
