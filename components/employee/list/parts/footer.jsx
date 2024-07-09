import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import { useCommon } from "../../../../hook/commonContext"
import { useCreate } from "../../../../hook/employeeContext";

const Footer = () => {
  const router = useRouter();
  const { setPageState } = useCommon();
  const { setEmployeeData} = useCreate();

  const goToCreatePage = () => {
    setPageState("init");
    setEmployeeData({
      employeeNum: "",
      name: "",
      address: "",
      tel: "",
      degree: "",
    });
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
