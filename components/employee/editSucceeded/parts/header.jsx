import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Header = () => {
  return (
    <Box
      sx={{
        textAlign: "left",
        mb: 2,
        fontSize: "1.5rem",
        marginTop: "2rem",
        marginBottom: "3rem",
      }}
    >
      <Typography variant="h4">▶社員情報編集確認</Typography>
    </Box>
  );
};

export default Header;
