import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useCreate } from "../../../hook/employeeContext";
import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import axios from "axios";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff0000", // 赤色を指定
    },
  },
});

// クリックされた社員のID、表示する社員情報をそれぞれStateで管理
const EmployeeDetail = ({ errorStatus, onSaveError }) => {
  const {
    selectedIDState,
    setPageState,
    detailEmployeeData,
    setDetailEmployeeData,
  } = useCreate();

  useEffect(() => {
    // リクエスト：IDに紐づいた社員情報を取得
    const fetchdetailEmployeeData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/show/${selectedIDState}`
        );
        const data = response.data;

        setDetailEmployeeData({
          employeeNum: data[0].employeeNum,
          name: data[0].name,
          address: data[0].address,
          tel: data[0].tel,
          degree: data[0].degree,
        });

        if (response.status === 200) {
          onSaveError(response.status);
        } else {
          onSaveError(response.status);
        }
      } catch (error) {
        if (error.response && error.response.status) {
          onSaveError(error.response.status);
        } else {
        }
      }
    };

    fetchdetailEmployeeData();
  }, []);

  // 戻るボタン押下時の処理
  const handleReturn = () => {
    setPageState("topPage");
  };

  // ※未設定　編集ボタン押下時の処理
  const handleEdit = () => {};

  // 取得した社員情報の表示
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
      {/* エラー発生時のメッセージ */}
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

      {/* 社員情報詳細の表示 */}
      {errorStatus == 200 && (
        <Box sx={{ textAlign: "center" }}>
          <Box sx={{ marginBottom: "1rem" }}>
            <TextField
              id="outlined-required"
              label="社員番号"
              sx={{ width: "40%" }}
              value={detailEmployeeData.employeeNum}
            />
          </Box>

          <Box sx={{ marginBottom: "1rem" }}>
            <TextField
              id="outlined-required"
              label="氏名"
              sx={{ width: "40%" }}
              value={detailEmployeeData.name}
            />
          </Box>

          <Box sx={{ marginBottom: "1rem" }}>
            <TextField
              id="outlined-required"
              label="住所"
              sx={{ width: "40%" }}
              value={detailEmployeeData.address}
            />
          </Box>

          <Box sx={{ marginBottom: "1rem" }}>
            <TextField
              id="outlined-required"
              label="電話番号"
              sx={{ width: "40%" }}
              value={detailEmployeeData.tel}
            />
          </Box>

          <Box sx={{ marginBottom: "1rem" }}>
            <TextField
              id="outlined-required"
              label="職位"
              sx={{ width: "40%" }}
              value={detailEmployeeData.degree}
            />
          </Box>

          {/* 戻るボタン */}
          <Box sx={{ marginTop: "3.7rem", marginBottom: "15rem" }}>
            <Button
              variant="contained"
              sx={{
                position: "absolute",
                right: 400,
                fontSize: "1.0rem",
                width: "15%",
              }}
              onClick={handleReturn}
            >
              戻る
            </Button>

            {/* 登録するボタン */}
            <Button
              variant="contained"
              sx={{
                position: "absolute",
                right: 170,
                fontSize: "1.0rem",
                width: "15%",
              }}
              onClick={handleEdit}
            >
              編集する
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
};

export default EmployeeDetail;
