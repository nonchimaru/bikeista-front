import { Box } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

/**
 * LogoBikeistaButtonコンポーネントのPropsの型定義
 */
type LogoBikeistaButtonProps = {
  /**
   * ロゴの表示サイズ
   */
  width?: number;
  height?: number;
};

/**
 * ロゴを表示させるコンポーネント
 */
export const LogoBikeistaButton: React.FC<LogoBikeistaButtonProps> = ({
  width = 90,
  height = 90,
}) => {
  return (
    <Box>
      <Link href="/">
        <Image
          src="/OriginalOnTransparent.png"
          width={width}
          height={height}
          alt="/OriginalOnTransparent.png"
        />
      </Link>
    </Box>
  );
};
