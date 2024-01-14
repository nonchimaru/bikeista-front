import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useEditIntroduction } from "../hooks/useEditIntroduction";

/**
 * 自己紹介文テキストフィールドコンポーネント
 */
export const EditIntroduction: React.FC = ({}) => {
  const { textValue, handleTextChange } = useEditIntroduction();

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 0, width: "101ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-textarea"
          label="自己紹介"
          placeholder="最大180文字"
          self-introduction
          multiline
          rows={4}
          value={textValue}
          onChange={handleTextChange}
        />
      </div>
    </Box>
  );
};
