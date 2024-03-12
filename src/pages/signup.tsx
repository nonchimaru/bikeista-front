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

const SignUp: NextPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  /**
   * フォームに入力された名前をセット
   */
  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  /**
   * フォームに入力されたメールアドレスをセット
   */
  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  /**
   * フォームに入力されたパスワードをセット
   */
  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  /**
   * アカウント登録
   */
  const handleSubmit = () => {
    axios
      .post("http://localhost/api/register", {
        name: name,
        email: email,
        password: password,
      })
      .then((red) => {
        router.push("/login");
      })
      .catch((error) => {
        alert("会員登録に失敗しました");
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
              名前
            </Typography>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              value={name}
              onChange={handleChangeName}
            />
          </Box>
          <Box>
            <Typography
              variant="body1"
              className={M_PLUS_Rounded_1c500.className}
              sx={{ marginTop: "8%", marginBottom: "-4%", width: "400px" }}
            >
              メールアドレス
            </Typography>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              value={email}
              onChange={handleChangeEmail}
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
              onChange={handleChangePassword}
            />
          </Box>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: "8%" }}
            onClick={handleSubmit}
          >
            Signup
          </Button>
          <Button
            variant="text"
            fullWidth
            href="login"
            sx={{ display: "block", marginTop: "20%", textAlign: "center" }}
          >
            ログインはこちら
          </Button>
        </LoginCard>
      </Container>
    </main>
  );
};

export default SignUp;
