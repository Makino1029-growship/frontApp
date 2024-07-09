import { useCommon } from "../../../../hook/commonContext";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Footer = () => {
  const { errorStatus, setPageState } = useCommon();

  // 戻るボタン押下時の処理
  const handleReturn = () => {
    setPageState("init");
  };

  // ※未設定　編集ボタン押下時の処理
  const handleEdit = () => {};

  return (
    <>
      {/* 戻るボタン */}
      {errorStatus == 200 && (
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
      )}
    </>
  );
};

export default Footer;
