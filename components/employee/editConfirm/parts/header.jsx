import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Header = () => {
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
        <Typography variant="h4">▶社員情報編集確認</Typography>
      </Box>

      <Box sx={{ textAlign: "center" }}>
        <Box sx={{ marginBottom: "1rem" }}>
          <Box sx={{ textAlign: "center", marginBottom: "2rem" }}>
            <Typography variant="h5">以下の内容で登録します。</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Header;