// @ts-nocheck
import { Box, Button, Typography, useTheme } from "@mui/material";

const Footer = () => {
    const theme = useTheme();
  return (
    <Box
      sx={{
        borderTop: `1px solid ${theme.palette.iconS.bag}`,
        py: .4,
      }}
    >
      <Typography
        justifyContent={"center"}
        display={"flex"}
        alignItems={"center"}
        color={theme.palette.iconS.main}
        variant="h6"
        sx={{ fontSize: 14 }}
      >
        Designed and developed by
        <Button
          sx={{
            mx: 0.5,
            fontSize: "12px",
            textTransform: "capitalize",
            color: "#ff7790",
          }}
          variant="text"
          color="primary"
        >
          MUSHYR
        </Button>
        ©2024
      </Typography>
    </Box>
  );
};

export default Footer;