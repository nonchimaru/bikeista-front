import { useState } from "react";
/**
 * EditProfileModalコンポーネントに使用するカスタムフック
 */
export const useEditProfileModal = () => {
  const [open, setOpen] = useState(false);

  /**
   * プロフィール編集モーダルボタンのクリックイベントのコンポーネント
   */
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return {
    open,
    handleOpen,
    handleClose,
  };
};
