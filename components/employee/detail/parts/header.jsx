import { useCommon } from "../../../../hook/commonContext";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
      <Box
        sx={{
          textAlign: "left",
          mb: 2,
          fontSize: "1.5rem",
          marginTop: "4rem",
          marginBottom: "3rem",
        }}
      >
        <Typography variant="h4">▶社員情報詳細</Typography>
      </Box>
      {errorStatus !== 200 && (
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
      )}
    </>
  );
};

export default Header;
