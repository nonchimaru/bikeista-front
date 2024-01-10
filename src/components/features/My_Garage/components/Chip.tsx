import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

/**
 * ChipsコンポーネントのPropsの型定義
 */
type ChipsProps = {
  /**
   * チップの表示サイズ
   */
};

/**
 * チップを表示させるコンポーネント
 */
export const Chips: React.FC = ({}) => {
  return (
    <Stack direction="row" spacing={0.25}>
      <Chip label="Rebel 250" color="primary" />
      <Chip label="GB350" color="primary" />
    </Stack>
  );
};
