import { createTheme, ThemeProvider } from "@mui/material/styles";
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
    </>
  );
};

export default Header;
