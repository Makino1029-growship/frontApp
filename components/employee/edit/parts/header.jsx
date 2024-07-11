import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useCommon } from "../../../../hook/commonContext";
import { useEdit } from "../../../../hook/editContext";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { CssBaseline, AppBar, Toolbar } from "@mui/material";
import Divider from "@mui/material/Divider";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff0000", // 赤色を指定
    },
  },
});

const Header = () => {
  const { inputNumErrorFlag, inputNullFlag, clickFlag } = useEdit();
  const { employeeData, errorStatus } = useCommon();

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
              社員情報編集
            </Typography>
            <Divider sx={{ width: "100%", my: 1 }} />
            {/* 下記にさらにコンテンツを追加 */}
          </Box>
        </Box>
      </ThemeProvider>

      {/* システムエラー発生時のメッセージ　propsで受け取ったエラーステータスで表示/非表示を管理 */}
      <Box sx={{ textAlign: "center" }}>
        <Box sx={{ marginTop: "0rem" }}>
          {errorStatus !== 200 && errorStatus !== "init" && (
            <Box
              sx={{
                textAlign: "center",
                marginBottom: "2rem",
                fontSize: "1.2rem",
              }}
            >
              <ThemeProvider theme={theme}>
                <Typography variant="p" color="primary">
                  エラーが発生しました。再度実行してください。
                </Typography>
              </ThemeProvider>
            </Box>
          )}

          {/* NULL項目がある場合のアラートメッセージ　フラグで表示/非表示を管理 */}

          {!inputNullFlag && clickFlag && (
            <Box sx={{ textAlign: "center" }}>
              <ThemeProvider theme={theme}>
                <Typography variant="p" color="primary">
                  未入力の項目があります。
                </Typography>
              </ThemeProvider>
            </Box>
          )}

          {/* 数値入力必須項目内にstringがある場合のアラートメッセージ　フラグで表示/非表示を管理 */}
          {!inputNumErrorFlag &&
            clickFlag &&
            (employeeData.employeeNum || employeeData.tel) && (
              <Box sx={{ textAlign: "center", marginBottom: "2rem" }}>
                <ThemeProvider theme={theme}>
                  <Typography variant="p" color="primary">
                    社員番号：5桁、電話番号：10,11桁の数値を入力してください
                  </Typography>
                </ThemeProvider>
              </Box>
            )}
        </Box>
      </Box>
    </>
  );
};

export default Header;
