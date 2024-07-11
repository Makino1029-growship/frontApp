import { useCommon } from "../../../../hook/commonContext";
import { useRegister } from "../../../../hook/registerContext";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import axios from "axios";

const Footer = () => {
  const { employeeData,  setErrorStatus } = useCommon();
  const { setPageState, setinputNumErrorFlag, setinputNullFlag, setclickFlag } =
    useRegister();

  const handleReturn = () => {
    setinputNumErrorFlag(false);
    setinputNullFlag(false);
    setclickFlag(false);
    setPageState("init");
  };

  const handleCreate = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/create",

        employeeData
      );

      if (response.status === 200) {
        setErrorStatus(response.status);
        setPageState("succeeded");

      } else {
        setinputNumErrorFlag(false);
        setinputNullFlag(false);
        setclickFlag(false);
        setErrorStatus(response.status);
        setPageState("init");
      }
    } catch (error) {
      if (error.response && error.response.status) {
        setinputNumErrorFlag(false);
        setinputNullFlag(false);
        setclickFlag(false);
        setErrorStatus(error.response.status);
        setPageState("init");
      } else {
      }
    }
  };

  return (
    <Box sx={{ marginTop: "3rem", marginBottom: "15rem" }}>
      {/* 戻るボタン */}
      <Button
        variant="contained"
        sx={{
          position: "absolute",
          right: 360,
          fontSize: "1.0rem",
          width: "150px", 
          height: "40px",
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
          width: "150px", 
          height: "40px",
        }}
        onClick={handleCreate}
      >
        保存する
      </Button>
    </Box>
  );
};

export default Footer;
