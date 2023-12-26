import Avatar from "@mui/material/Avatar";

/**
 * LogoBikeistaコンポーネントのPropsの型定義
 */
type LogoBikeistaProps = {
  /**
   * ロゴの表示サイズ
   */
  width?: string;
  height?: string;
};

/**
 * ロゴを表示させるコンポーネント
 */
export const LogoBikeista: React.FC<LogoBikeistaProps> = ({
  width = "13%",
  height = "13%",
}) => {
  return (
    <Avatar
      alt="Logo"
      src="/logo_2.jpg"
      variant="rounded"
      sx={{ width, height }}
    />
  );
};
