import { useCreate, useSetCreate } from "../context/Context";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const CreateEmployee = (errorStatus) => {
  // 職位のプルダウンに表示する項目の設定
  const degreeOptions = [
    "Analyst",
    "Consultant",
    "Senior Consultant",
    " Manager",
    "Senior Manager",
    "Director",
    "CEO",
  ];

  // ルーター、社員情報State・更新関数の宣言
  const router = useRouter();
  const employeeData = useCreate();
  const setEmployeeData = useSetCreate();

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
    if (!isNaN(employeeData.employeeNum) && !isNaN(employeeData.tel)) {
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
      router.push("/?step=confirm");
    }
  }, [inputNullFlag, inputNumErrorFlag, router]);

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
        <h3>▶社員情報新規登録・編集</h3>
      </Box>

      {/* システムエラー発生時のメッセージ　propsで受け取ったエラーステータスで表示/非表示を管理 */}
      <Box sx={{ textAlign: "center" }}>
        <Box sx={{ marginBottom: "1rem" }}>
          {errorStatus.errorStatus !== 200 &&
            errorStatus.errorStatus !== null && (
              <p style={{ color: "red" }}>
                エラーが発生しました。お手数ですが再度登録してください。
              </p>
            )}

          {/* NULL項目がある場合のアラートメッセージ　フラグで表示/非表示を管理 */}
          {!inputNullFlag && clickFlag && (
            <p style={{ color: "red" }}>未入力の項目があります。</p>
          )}

          {/* 数値入力必須項目内にstringがある場合のアラートメッセージ　フラグで表示/非表示を管理 */}
          {!inputNumErrorFlag && clickFlag && (
            <p style={{ color: "red" }}>
              社員番号、電話番号は数値で入力してください
            </p>
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
