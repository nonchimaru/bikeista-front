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
  const [error, setError] = useState("");

  /**
   * フォームに入力された名前をセット
   */
  const handleChangeName = (event: { target: { value: any } }) => {
    const inputValue = event.target.value;
    if (inputValue.length <= 20) {
      setName(inputValue);
      setError(""); // ここでエラーメッセージをクリア
    } else {
      setError("20文字以上は設定できません"); // ここでエラーメッセージをセット
    }
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

  const [isLoading, setIsLoading] = useState(false);

  /**
   * アカウント登録
   */
  const handleSubmit = () => {
    setIsLoading(true); // ローディング状態を設定
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
        alert("アカウント作成に失敗しました");
      })
      .finally(() => {
        setIsLoading(false); // 処理が完了したらローディング状態を解除
      });
  };

  return (
    <main>
      <Container>
        <LoginCard>
          <Typography
            variant="h6"
            className={M_PLUS_Rounded_1c500.className}
            sx={{ width: "400px" }}
          >
            アカウント作成
          </Typography>
          <Box>
            <Typography
              variant="body1"
              className={M_PLUS_Rounded_1c500.className}
              sx={{ marginBottom: "-4%", width: "400px", marginTop: "8%" }}
            >
              名前
            </Typography>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              value={name}
              onChange={handleChangeName} // ここでhandleChangeName関数を渡す
              error={error !== ""} // ここでerrorの状態によってエラーを表示するかどうかを決定
              helperText={error} // ここでエラーメッセージを表示
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
            disabled={isLoading} // 登録処理中はボタンを無効化
          >
            {isLoading ? "Loading..." : "Signup"}
          </Button>
          <Button
            variant="text"
            fullWidth
            href="login"
            sx={{ display: "block", marginTop: "20%", textAlign: "center" }}
            className={M_PLUS_Rounded_1c500.className}
          >
            ログインはこちら
          </Button>
        </LoginCard>
      </Container>
    </main>
  );
};

export default SignUp;
