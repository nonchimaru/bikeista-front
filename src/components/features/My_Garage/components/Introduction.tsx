import { Typography } from "@mui/material";

/**
 * IntroductionのコンポーネントのPropsの型定義
 */
type IntroductionProps = {};

/**
 * 自己紹介文を表示させるコンポーネント
 */
export const Introduction: React.FC<IntroductionProps> = ({}) => {
  return (
    <Typography
      fontSize="h6.fontSize"
      sx={{ lineHeight: 1.2, marginTop: "0.5em" }}
    >
      ここに自己紹介文が入る
      <br /> ユーザーの自由入力
      <br />
      最大で180文字
      <br />
      🐣🐣
      <br />
    </Typography>
  );
};
