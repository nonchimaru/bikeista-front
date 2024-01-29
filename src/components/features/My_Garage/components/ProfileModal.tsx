import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import { ProfileIcon } from "./ProfileIcon";
import { UploadIcon } from "./UploadIcon";
import { Backdrop, TextField } from "@mui/material";
import { EditIntroduction } from "./EditIntroduction";
import { SelectChipsHONDA } from "./SelectChipsHONDA";
import { SelectChipsYAMAHA } from "./SelectChipsYAMAHA";
import { SelectChipsSuzuki } from "./SelectChipsSuzuki";
import { SelectChipsKawasaki } from "./SelectChipsKawasaki";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1100,
  height: 700,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
  overflowY: "auto", // 上下のスクロールを可能にする
};

export const ProfileModal: React.FC = ({}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
    // クリックがモーダル内の要素から起こった場合、モーダルを閉じないようにする
    event.stopPropagation();
  };
  return (
    <div>
      <Button
        onClick={handleOpen}
        style={{
          color: "inherit",
          backgroundColor: "transparent",
        }}
      >
        <EditIcon sx={{ fontSize: "30px" }} />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        BackdropComponent={Backdrop}
        BackdropProps={{ onClick: handleModalClick }}
      >
        <Box sx={style}>
          <Box sx={{ display: "flex" }}>
            <button
              onClick={handleClose}
              style={{ border: "none", background: "none" }}
            >
              <ClearIcon
                sx={{ fontSize: "35px", marginRight: "10px", color: "black" }}
              />
            </button>
            <Box sx={{ marginTop: "0.5%" }}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                マイガレージ編集
              </Typography>
            </Box>
            <SaveAltIcon
              sx={{ fontSize: "40px", marginLeft: "830px", color: "black" }}
            />
          </Box>
          <Typography id="modal-modal-description">
            <Box sx={{ display: "flex", marginTop: "2%" }}>
              <Box
                sx={{
                  display: "flex",
                  gap: "5px",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <ProfileIcon width={90} height={90} />
                <UploadIcon />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "70%",
                  gap: "10px",
                  justifyContent: "center",
                  marginLeft: "3%",
                }}
              >
                <TextField label="ユーザーID" style={{ width: "70%" }} />
                <TextField label="名前" style={{ width: "70%" }} />
              </Box>
            </Box>
            <Box sx={{ marginTop: "3%" }}>
              チップ選択
              <SelectChipsHONDA />
              <SelectChipsYAMAHA />
              <SelectChipsSuzuki />
              <SelectChipsKawasaki />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "50px",
                justifyContent: "center",
                marginTop: "50px",
              }}
            >
              <EditIntroduction />
            </Box>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
