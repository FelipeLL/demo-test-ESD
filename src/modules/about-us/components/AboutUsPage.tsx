import { Box, Skeleton, Typography } from "@mui/material";

export const AboutUsPage: React.FC = () => {
  return (
    <Box mt={9} p={2}>
      <Skeleton variant="rectangular" width="100%" height="200px" />
      <Skeleton />
      <Skeleton width="60%" />

      <Skeleton variant="rectangular" width="100%" height="200px" />
      <Skeleton />
      <Skeleton width="60%" />

      <Skeleton variant="rectangular" width="100%" height="200px" />
      <Skeleton />
      <Skeleton width="60%" />

      <Typography
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%);",
        }}
      >
        En construcción...
      </Typography>
    </Box>
  );
};
