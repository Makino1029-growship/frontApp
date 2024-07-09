import { Box, Typography } from "@mui/material";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useCommon } from "../../../../hook/commonContext";
import { useCreate } from "../../../../hook/employeeContext";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff0000", // 赤色を指定
    },
  },
});

const Header = () => {
  const { errorStatus } = useCommon();
  return (
    <>
      {errorStatus === 200 && (
        <Box sx={{ textAlign: "left" }}>
          <Box sx={{ marginTop: "4rem" }}>
            <Typography
              variant="h4"
              sx={{
                right: 200,
                fontSize: "2.13rem",
                width: "30%",
              }}
            >
              ▶社員情報一覧
            </Typography>
          </Box>
        </Box>
      )}

      {errorStatus !== 200 && errorStatus !== "init" && (
        <Box sx={{ textAlign: "center", marginTop: "4rem" }}>
          <Box sx={{ textAlign: "center", marginTop: "12rem" }}>
            <ThemeProvider theme={theme}>
              <Typography
                variant="p"
                color="primary"
                sx={{
                  right: 200,
                  fontSize: "1.3rem",
                  width: "30%",
                }}
              >
                エラーが発生しました。時間を置いて再度アクセスしてください。
              </Typography>
            </ThemeProvider>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Header;
