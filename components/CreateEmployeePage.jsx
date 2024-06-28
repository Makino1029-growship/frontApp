import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const CreateEmployee = () => {
  return (
    <>
      <Box
        sx={{
          textAlign: "left",
          mb: 2,
          fontSize: "1.5rem",
          marginTop: "2rem",
          marginBottom: "3rem",
        }}
      >
        <h3>▶社員情報新規登録・編集</h3>
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Box sx={{ marginBottom: "1rem" }}>
          <TextField
            required
            id="outlined-required"
            label="社員番号"
            sx={{ width: "40%" }}
          />
        </Box>

        <Box sx={{ marginBottom: "1rem" }}>
          <TextField
            required
            id="outlined-required"
            label="氏名"
            sx={{ width: "40%" }}
          />
        </Box>

        <Box sx={{ marginBottom: "1rem" }}>
          <TextField
            required
            id="outlined-required"
            label="職位"
            sx={{ width: "40%" }}
          />
        </Box>

        <Box sx={{ marginBottom: "1rem" }}>
          <TextField
            required
            id="outlined-required"
            label="住所"
            sx={{ width: "40%" }}
          />
        </Box>

        <Box sx={{ marginBottom: "1rem" }}>
          <TextField
            required
            id="outlined-required"
            label="電話番号"
            sx={{ width: "40%" }}
          />
        </Box>

        <Box sx={{ marginTop: "3rem",marginBottom: "15rem" }}>
          <Button variant="contained" sx={{ position: 'absolute',right:170, fontSize: "1.2rem", width: "15%" }}>
            保存する
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default CreateEmployee;
