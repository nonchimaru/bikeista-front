import { NextPage } from "next";
import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { M_PLUS_Rounded_1c } from "next/font/google";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
});

const LoginCard = styled("div")({
  backgroundColor: "#fff",
  padding: "100px 80px",
  borderRadius: "10px",
  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
});

const M_PLUS_Rounded_1c500 = M_PLUS_Rounded_1c({
  weight: "500",
  preload: false,
});

const Login: NextPage = () => {
  const [email, setEmail] = useState("");
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const [password, setPassword] = useState("");
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const router = useRouter();
  const handleSubmit = () => {
    axios
      .post("http://localhost/api/login", {
        email: email,
        password: password,
      })
      .then((red) => {
        router.push("/");
      })
      .catch((error) => {
        alert("ログイン認証に失敗しました");
      });
  };

  return (
    <main>
      <Container>
        <LoginCard>
          <Box>
            <Typography
              variant="body1"
              className={M_PLUS_Rounded_1c500.className}
              sx={{ marginBottom: "-4%", width: "400px" }}
            >
              メールアドレス
            </Typography>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              value={email}
              onChange={handleEmailChange}
            />
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
              value={password}
              onChange={handlePasswordChange}
            />
          </Box>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: "8%" }}
            onClick={handleSubmit}
          >
            Login
          </Button>
          <Button
            variant="text"
            fullWidth
            sx={{ display: "block", marginTop: "20%" }}
          >
            新規会員登録の方はこちら
          </Button>
        </LoginCard>
      </Container>
    </main>
  );
};

export default Login;
