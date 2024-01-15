// @ts-nocheck
import { Box , Container  , Paper, Stack , Typography , useMediaQuery, useTheme } from "@mui/material";
import { AccessAlarmOutlined, CreditScoreOutlined, ElectricBolt, WorkspacePremiumOutlined } from "@mui/icons-material";
  
  const IconSection = () => {
    return (
      <Container
        sx={{ mt: 3}}
      >
        <Stack
          
          sx={{ flexWrap: "wrap" , gap:'3px'}}
          direction={"row"}
          alignItems={"center"}

        >
          <MyBox
            icon={<ElectricBolt fontSize="large" />}
            title={"Fast Delivery"}
            subTitle={"Start from $10"}
          />
          <MyBox
            icon={<WorkspacePremiumOutlined fontSize="large" />}
            title={"Money Guarantee"}
            subTitle={"7 Days Back"}
          />
          <MyBox
            icon={<AccessAlarmOutlined fontSize="large" />}
            title={"365 Days"}
            subTitle={"For free return"}
          />
          <MyBox
            icon={<CreditScoreOutlined fontSize="large" />}
            title={"Payment"}
            subTitle={"Secure system"}
          />
        </Stack>
      </Container>
    );
  };
  
  export default IconSection;
  
  // eslint-disable-next-line react/prop-types
  const MyBox = ({ icon, title, subTitle }) => {
    const theme = useTheme();
    return (
      <Paper
        sx={{
            bgcolor:theme.palette.iconS.bag ,
            color:theme.palette.iconS.main,
          width: 250,
          display: "flex",
          flexGrow: 1,
          alignItems: "center",
          py: 1.6,
          justifyContent: useMediaQuery("(min-width:600px)") ? "center" : "left",
        }}
      >
        {icon}
  
        <Box>
          <Typography variant="body1">{title}</Typography>
          <Typography
            sx={{ fontWeight: 300, color: theme.palette.iconS.main }}
            variant="body1"
          >
            {subTitle}
          </Typography>
        </Box>
      </Paper>
    );
  };