import { Box, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useCommon } from "../../../../hook/commonContext";
import React from "react";
import { CssBaseline, AppBar, Toolbar } from "@mui/material";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff0000", // 赤色を指定
    },
  },
});

const Header = () => {
  const { setEmployeeData, errorStatus } = useCommon();
  const router = useRouter();
  const goToCreatePage = () => {
    setEmployeeData({
      employeeNum: "",
      name: "",
      address: "",
      tel: "",
      degree: "",
    });
    router.push("./register");
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* デフォルトのCSSをリセット */}
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {/* AppBar */}
          <AppBar
            position="fixed"
            sx={{
              zIndex: theme.zIndex.drawer + 1,
              backgroundColor: "#333333",
              color: "#FFFFFF",
            }}
          >
            <Toolbar>
              <Typography variant="h6" noWrap>
                社員情報管理システム
              </Typography>
            </Toolbar>
          </AppBar>

          {/* メインコンテンツエリア */}
          <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
          >
            <Toolbar />
            <Typography variant="h5" gutterBottom sx={{ color: "#000000" }}>
              社員情報一覧
            </Typography>
            <Divider sx={{ width: "100%", my: 1 }} />
            {/* 下記にさらにコンテンツを追加 */}
          </Box>
        </Box>
      </ThemeProvider>

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
      {errorStatus === 200 && (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Button
            variant="contained"
            sx={{
              position: "absolute",
              left: 46,
              fontSize: "0.9rem",
              width: "18%",
            }}
            onClick={goToCreatePage}
          >
            社員情報を新規登録する
          </Button>
        </Box>
      )}
    </>
  );
};

export default Header;
