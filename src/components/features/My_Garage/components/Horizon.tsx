import { Divider } from "@mui/material";

/**
 * HorizonのコンポーネントのPropsの型定義
 */
type HorizonProps = {
  /**
   * 水平線の表示サイズ
   */
  orientation?: "horizontal" | "vertical";
  style?: React.CSSProperties;
};

/**
 * 水平線を表示させるコンポーネント
 */
export const Horizon: React.FC<HorizonProps> = ({
  orientation = "horizontal",
  style = { width: "225%" },
}) => {
  return <Divider orientation={orientation} style={style} />;
};
