import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Succeeded = () => {
  // 関数の宣言：TOPページに戻るボタンを押した時の処理
  // const goToTopPage = () => {
  // };

  //表示するコンテンツを設定
  return (
    <Box sx={{ textAlign: "center" }}>
      <Box sx={{ marginTop: "18rem" }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="p">
            <h2>社員情報登録が完了しました。</h2>
          </Typography>
        </Box>
        <Button
          variant="contained"
          sx={{
            position: "absolute",
            right: 500,
            fontSize: "1.0rem",
            width: "20%",
          }}
          // onClick={goToTopPage}
        >
          TOPページに戻る
        </Button>
      </Box>
    </Box>
  );
};

export default Succeeded;
