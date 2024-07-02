import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";

const TopPage = () => {
  const router = useRouter();

  const goToCreatePage = () => {
    router.push("/?step=create");
  };

  return (
    <Box sx={{ textAlign: "center" }}>
      <Box sx={{ marginTop: "18rem" }}>
        <h3>▶社員情報一覧</h3>
        <p> 10001 / ~太郎</p>
        <p> 10002 / ~次郎</p>
        <p> 10003 / ~三郎</p>
        <p> 10004 / ~四郎</p>
        <Button
          variant="contained"
          sx={{ position: "absolute", right: 500, fontSize: "1.0rem", width: "20%" }}
          onClick={goToCreatePage}
        >
          社員情報を新規登録する
        </Button>
      </Box>
    </Box>
  );
};

export default TopPage;
