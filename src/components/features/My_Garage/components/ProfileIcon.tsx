import Avatar from "@mui/material/Avatar";

/**
 * ProfileIconコンポーネントのPropsの型定義
 */
type ProfileIconProps = {
  /**
   * アイコンの表示サイズ
   */
  width?: number;
  height?: number;
};

/**
 * アイコンを表示させるコンポーネント
 */
export const ProfileIcon: React.FC<ProfileIconProps> = ({
  width = 64,
  height = 64,
}) => {
  return (
    <Avatar
      alt="ProfileSample"
      src="/ProfileSample.JPG"
      sx={{ width, height }}
    />
  );
};
