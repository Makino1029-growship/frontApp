import { useCreate } from "../hook/context";
import { useState, useEffect } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { degreeOptions } from "../constant/degreeOption";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff0000", // 赤色を指定
    },
  },
});

const CreateEmployee = (errorStatus) => {
  // 社員情報State・更新関数の宣言
  const { employeeData, setEmployeeData, setPageState } = useCreate();

  // 数値入力項目のエラーチェック用のstate、更新関数の宣言
  const [inputNumErrorFlag, setinputNumErrorFlag] = useState(false);

  // nullチェック用のstate、更新関数の宣言
  const [inputNullFlag, setinputNullFlag] = useState(false);

  // 保存ボタンを押したか判別する用のstate、更新関数の宣言
  const [clickFlag, setclickFlag] = useState(false);

  // MUIから引用　inputValueに割り当てる用のstate、更新関数の宣言
  const [inputValue, setInputValue] = useState("");

  //関数の宣言：保存ボタンを押したときの処理
  const handleSave = () => {
    setclickFlag(true);

    // バリデーション（数値チェック）
    if (
      !isNaN(employeeData.employeeNum) &&
      !isNaN(employeeData.tel) &&
      employeeData.employeeNum.length === 5 &&
      (employeeData.tel.length === 10 || employeeData.tel.length === 11)
    ) {
      setinputNumErrorFlag(true);
    } else {
      setinputNumErrorFlag(false);
    }

    // バリデーション（nullチェック）
    if (
      employeeData.employeeNum !== "" &&
      employeeData.name !== "" &&
      employeeData.address !== "" &&
      employeeData.tel !== "" &&
      employeeData.degree !== ""
    ) {
      setinputNullFlag(true);
    } else {
      setinputNullFlag(false);
    }
  };

  //バリデーションを突破した場合のみ次のページに進む
  useEffect(() => {
    if (inputNullFlag && inputNumErrorFlag) {
      setPageState("confirm")
    }
  }, [inputNullFlag, inputNumErrorFlag]);

  //関数の宣言：テキストフィールドの値が変更されたときに実行
  const inputChange = (e, type) => {
    setEmployeeData({
      ...employeeData,
      [type]: e.target.value,
    });
  };

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
        <Typography variant="h4">▶社員情報新規登録・編集</Typography>
      </Box>

      {/* システムエラー発生時のメッセージ　propsで受け取ったエラーステータスで表示/非表示を管理 */}
      <Box sx={{ textAlign: "center" }}>
        <Box sx={{ marginBottom: "1rem" }}>
          {errorStatus.errorStatus !== 200 &&
            errorStatus.errorStatus !== null && (
              <Box sx={{ textAlign: "center" }}>
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
          {!inputNumErrorFlag && clickFlag && (
            <Box sx={{ textAlign: "center" ,marginBottom: "2rem"}}>
              <ThemeProvider theme={theme}>
                <Typography variant="p" color="primary">
                  社員番号：5桁、電話番号：10,11桁で数値を入力してください
                </Typography>
              </ThemeProvider>
            </Box>
          )}

          {/* 社員情報入力項目 */}
          <TextField
            id="outlined-required"
            label="社員番号"
            sx={{ width: "40%" }}
            onChange={(e) => inputChange(e, "employeeNum")}
            value={employeeData.employeeNum}
          />
        </Box>
        <Box sx={{ marginBottom: "1rem" }}>
          <TextField
            id="outlined-required"
            label="氏名"
            sx={{ width: "40%" }}
            onChange={(e) => inputChange(e, "name")}
            value={employeeData.name}
          />
        </Box>

        <Box sx={{ marginBottom: "1rem" }}>
          <TextField
            id="outlined-required"
            label="住所"
            sx={{ width: "40%" }}
            onChange={(e) => inputChange(e, "address")}
            value={employeeData.address}
          />
        </Box>

        <Box sx={{ marginBottom: "1rem" }}>
          <TextField
            id="outlined-required"
            label="電話番号"
            sx={{ width: "40%" }}
            onChange={(e) => inputChange(e, "tel")}
            value={employeeData.tel}
          />
        </Box>

        <Box sx={{ marginBottom: "1rem" }}>
          <Autocomplete
            value={employeeData.degree}
            onChange={(event, newValue) => {
              setEmployeeData({
                ...employeeData,
                degree: newValue,
              });
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            id="controllable-states-demo"
            options={degreeOptions}
            sx={{ width: "40%", marginLeft: "30%" }}
            renderInput={(params) => <TextField {...params} label="職位" />}
          />
        </Box>

        {/* 保存ボタン */}
        <Box sx={{ marginTop: "3rem", marginBottom: "15rem" }}>
          <Button
            variant="contained"
            sx={{
              position: "absolute",
              right: 170,
              fontSize: "1.2rem",
              width: "15%",
            }}
            onClick={handleSave}
          >
            保存する
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default CreateEmployee;
