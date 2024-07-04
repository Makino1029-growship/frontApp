import { useCreate } from "../../../hook/employeeContext";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import axios from "axios";

const CreateConfirm = ({ onSaveError }) => {
  // 社員情報state・ページstateの更新関数
  const { employeeData, setPageState } = useCreate();

  // 関数の宣言：登録するボタンを押した時の処理
  // 成功 → DBに登録して登録完了ページへ
  // 失敗 → エラーstateを変更し、登録ページに戻る
  const handleCreate = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/create",
        employeeData
      );

      if (response.status === 200) {
        onSaveError(response.status);
        setPageState("succeeded");
        console.log(response.status)
      } else {
        onSaveError(response.status);
        setPageState("create");
        console.log(response.status)

      }
    } catch (error) {
      if (error.response && error.response.status) {
        onSaveError(error.response.status);
        setPageState("create");
      } else {
      }
    }
  };

  // 関数の宣言：戻るボタンを押したときの処理
  const handleReturn = () => {
    setPageState("create");
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
        <Typography variant="h4">▶社員情報登録確認</Typography>
      </Box>
      {/* 入力された社員情報の表示　valueをstateで管理することで、値はすべて登録ページから引き継いでいる */}
      <Box sx={{ textAlign: "center" }}>
        <Box sx={{ marginBottom: "1rem" }}>
          <Box sx={{ textAlign: "center", marginBottom: "2rem" }}>
            <Typography variant="h5">以下の内容で登録します。</Typography>
          </Box>
          <TextField
            id="outlined-required"
            label="社員番号"
            sx={{ width: "40%" }}
            value={employeeData.employeeNum}
          />
        </Box>

        <Box sx={{ marginBottom: "1rem" }}>
          <TextField
            id="outlined-required"
            label="氏名"
            sx={{ width: "40%" }}
            value={employeeData.name}
          />
        </Box>

        <Box sx={{ marginBottom: "1rem" }}>
          <TextField
            id="outlined-required"
            label="住所"
            sx={{ width: "40%" }}
            value={employeeData.address}
          />
        </Box>

        <Box sx={{ marginBottom: "1rem" }}>
          <TextField
            id="outlined-required"
            label="電話番号"
            sx={{ width: "40%" }}
            value={employeeData.tel}
          />
        </Box>

        <Box sx={{ marginBottom: "1rem" }}>
          <TextField
            id="outlined-required"
            label="職位"
            sx={{ width: "40%" }}
            value={employeeData.degree}
          />
        </Box>

        {/* 戻るボタン */}
        <Box sx={{ marginTop: "3rem", marginBottom: "15rem" }}>
          <Button
            variant="contained"
            sx={{
              position: "absolute",
              right: 400,
              fontSize: "1.2rem",
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
              fontSize: "1.2rem",
              width: "15%",
            }}
            onClick={handleCreate}
          >
            登録する
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default CreateConfirm;
