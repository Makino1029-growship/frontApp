import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const Footer = () => {
  const router = useRouter();
  const goToTopPage = () => {
    router.push("./toppage");
  };

  return (
    <Box sx={{ textAlign: "center" }}>
      <Box sx={{ marginTop: "3rem" }}>
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

export default Footer;
