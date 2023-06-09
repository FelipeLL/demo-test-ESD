import { Box, Typography } from "@mui/material";

interface Props {
  label: string;
  icon: any;
}

export const RecipeCategory: React.FC<Props> = ({ label, icon }) => {
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
        backgroundColor: "#F4F9FF",
        cursor: "pointer",
        "&:hover": {
          color: "white",
          backgroundColor: "#ef4c00",
        },
      }}
    >
      {icon}
      <Typography sx={{ fontSize: "14px" }}>{label}</Typography>
    </Box>
  );
};
