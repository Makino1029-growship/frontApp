import { useRouter } from "next/router";
import { useCommon } from "../../../../hook/commonContext"
import Button from "@mui/material/Button";

const Footer = () => {
  const { setEmployeeData } = useCommon();
  const router = useRouter();
  
  const goToCreatePage = () => {
    setEmployeeData({
      employeeNum: "",
      name: "",
      address: "",
      tel: "",
      degree: "",
    })
    router.push("./register");
  };

  return (
    <Button
      variant="contained"
      sx={{
        position: "absolute",
        right: 180,
        fontSize: "1.0rem",
        width: "20%",
      }}
      onClick={goToCreatePage}
    >
      社員情報を新規登録する
    </Button>
  );
};

export default Footer;
