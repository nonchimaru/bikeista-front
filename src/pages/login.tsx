import { NextPage } from "next";
import React from "react";
import { Button, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  backgroundColor: "#f0f0f0",
});

const LoginCard = styled("div")({
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
});

const Login: NextPage = () => {
  return (
    <main>
      <Container>
        <LoginCard>
          <Typography variant="h5" gutterBottom>
            Login
          </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="メールアドレス"
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="パスワード"
            type="password"
          />
          <Button variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </LoginCard>
      </Container>
    </main>
  );
};

export default Login;
