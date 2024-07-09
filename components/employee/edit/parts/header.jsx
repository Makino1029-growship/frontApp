import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useCommon } from "../../../../hook/commonContext";
import { useEdit } from "../../../../hook/editContext";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff0000", // 赤色を指定
    },
  },
});

const Header = () => {
  const { inputNumErrorFlag, inputNullFlag, clickFlag } = useEdit();
  const { employeeData,  errorStatus } = useCommon();

  return (
    <>
      <Box
        sx={{
          textAlign: "left",
          mb: 2,
          fontSize: "1.5rem",
          marginTop: "4rem",
          marginBottom: "3rem",
        }}
      >
        <Typography variant="h4">▶社員情報編集</Typography>
      </Box>

      {/* システムエラー発生時のメッセージ　propsで受け取ったエラーステータスで表示/非表示を管理 */}
      <Box sx={{ textAlign: "center" }}>
        <Box sx={{ marginBottom: "1rem" }}>
          {errorStatus !== 200 &&
            errorStatus !== "init" && (
              <Box
                sx={{
                  textAlign: "center",
                  marginBottom: "2rem",
                  fontSize: "1.2rem",
                }}
              >
                <ThemeProvider theme={theme}>
                  <Typography variant="p" color="primary">
                    エラーが発生しました。お手数ですが再度登録してください。
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
