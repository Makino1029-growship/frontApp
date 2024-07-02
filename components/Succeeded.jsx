import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";

const Succeeded = () => {
  // ルーター
  const router = useRouter();
  
  // 関数の宣言：TOPページに戻るボタンを押した時の処理
  const goToTopPage = () => {
    router.push("/");
  };

  //表示するコンテンツを設定
  return (
    <Box sx={{ textAlign: "center" }}>
      <Box sx={{ marginTop: "18rem" }}>
        <h3>社員情報登録が完了しました。</h3>
        <Button
          variant="contained"
          sx={{
            position: "absolute",
            right: 500,
            fontSize: "1.0rem",
            width: "20%",
          }}
          onClick={goToTopPage}
        >
          TOPページに戻る
        </Button>
      </Box>
    </Box>
  );
};

export default Succeeded;
