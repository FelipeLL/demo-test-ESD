import { Box, Skeleton, Typography } from "@mui/material";

export const VideosPage: React.FC = () => {
  return (
    <Box mt={9} p={2}>
      <Skeleton
        animation="wave"
        variant="circular"
        width={40}
        height={40}
        style={{ marginBottom: 4, marginTop: 1 }}
      />
      <Skeleton
        animation="wave"
        height={10}
        width="80%"
        style={{ marginBottom: 4 }}
      />
      <Skeleton
        animation="wave"
        height={10}
        width="40%"
        style={{ marginBottom: 6 }}
      />
      <Skeleton variant="rectangular" width="100%" height="100px" />

      <Skeleton
        animation="wave"
        variant="circular"
        width={40}
        height={40}
        style={{ marginBottom: 4, marginTop: 30 }}
      />
      <Skeleton
        animation="wave"
        height={10}
        width="80%"
        style={{ marginBottom: 4 }}
      />
      <Skeleton
        animation="wave"
        height={10}
        width="40%"
        style={{ marginBottom: 6 }}
      />
      <Skeleton variant="rectangular" width="100%" height="100px" />

      <Skeleton
        animation="wave"
        variant="circular"
        width={40}
        height={40}
        style={{ marginBottom: 4, marginTop: 30 }}
      />
      <Skeleton
        animation="wave"
        height={10}
        width="80%"
        style={{ marginBottom: 4 }}
      />
      <Skeleton
        animation="wave"
        height={10}
        width="40%"
        style={{ marginBottom: 6 }}
      />
      <Skeleton variant="rectangular" width="100%" height="100px" />

      <Skeleton
        animation="wave"
        variant="circular"
        width={40}
        height={40}
        style={{ marginBottom: 4, marginTop: 30 }}
      />
      <Skeleton
        animation="wave"
        height={10}
        width="80%"
        style={{ marginBottom: 4 }}
      />
      <Skeleton
        animation="wave"
        height={10}
        width="40%"
        style={{ marginBottom: 6 }}
      />
      <Skeleton variant="rectangular" width="100%" height="100px" />

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
