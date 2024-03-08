import { NextPage } from "next";
import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { M_PLUS_Rounded_1c } from "next/font/google";

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
});

const LoginCard = styled("div")({
  backgroundColor: "#fff",
  padding: "100px 80px", // 上下に10ピクセル、左右に20ピクセルの余白
  borderRadius: "10px",
  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
});

const M_PLUS_Rounded_1c500 = M_PLUS_Rounded_1c({
  weight: "500",
  preload: false,
});

const Login: NextPage = () => {
  return (
    <main>
      <Container>
        <LoginCard>
          <Box>
            <Typography
              variant="body1"
              className={M_PLUS_Rounded_1c500.className}
              sx={{ marginTop: "%", marginBottom: "-4%" }}
            >
              メールアドレス
            </Typography>
            <TextField variant="outlined" margin="normal" fullWidth />
          </Box>
          <Box>
            <Typography
              variant="body1"
              className={M_PLUS_Rounded_1c500.className}
              sx={{ marginTop: "8%", marginBottom: "-4%" }}
            >
              パスワード
            </Typography>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              type="password"
            />
          </Box>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: "8%" }}
          >
            Login
          </Button>
          <Button variant="text" sx={{ display: "block", marginTop: "20%" }}>
            新規会員登録の方はこちら
          </Button>
        </LoginCard>
      </Container>
    </main>
  );
};

export default Login;
