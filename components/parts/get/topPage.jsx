import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useCreate } from "../../../hook/employeeContext";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PaginatedList from "./pagination";
import Box from "@mui/material/Box";
import React from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff0000", // 赤色を指定
    },
  },
});

const TopPage = ({ errorStatus, message }) => {
  // ページ、表示する社員情報をstateで管理
  const { setPageState, setEmployeeData } = useCreate();

  // 「社員情報を新規登録する」ボタン押下時の処理
  // 繰り返し新規登録する際に、前の社員情報を引き継がないようにする
  const goToCreatePage = () => {
    setPageState("create");
    setEmployeeData({
      employeeNum: "",
      name: "",
      address: "",
      tel: "",
      degree: "",
    });
  };

  // 取得した社員情報の表示
  console.log("top,", errorStatus);
  return (
    <>
      {/* {errorStatus == 200 && ( */}
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

          {/* エラー発生時のメッセージ */}
          {errorStatus !== 200 && errorStatus !== null && (
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
          {errorStatus == 200 && (
            <>
              <Box
                sx={{
                  textAlign: "center",
                  marginTop: "2rem",
                  marginBottom: "4rem",
                }}
              >
                <PaginatedList items={message} />
              </Box>

              <Button
                variant="contained"
                sx={{
                  position: "absolute",
                  right: 180,
                  fontSize: "1.0rem",
                  width: "20%",
                }}
                onClick={goToCreatePage}
              >
                社員情報を新規登録する
              </Button>
            </>
          )}
        </Box>
      </Box>
      {/* )} */}
    </>
  );
};

export default TopPage;
