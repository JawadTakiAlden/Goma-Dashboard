import { LogoutOutlined } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import CryptoJS from "crypto-js";
import { Outlet, useNavigate } from "react-router";

const MainLayout = () => {
  const navigate = useNavigate()
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          px: 3,
          alignItems: "center",
          justifyContent: "space-between",
          height: "80px",
          boxShadow: "0px 0px 10px -5px rgba(0,0,0,.4)",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: "#0033ff",
          }}
        >
          Goma
        </Typography>
        <Button
          onClick={() => {
            var incryptedTokenKey = CryptoJS.AES.encrypt(
              "goma_admin_token",
              "developingSecretkey"
            ).toString();
            localStorage.removeItem(incryptedTokenKey)
            navigate('/auth/login')
          }}
          endIcon={<LogoutOutlined />}
          variant="outlined"
          color="error"
        >
          logout
        </Button>
      </Box>
      <Box
        sx={{
          px: 3,
          py: 2,
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
