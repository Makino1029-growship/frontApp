import { useCommon } from "../../../../hook/commonContext";
import { useEdit } from "../../../../hook/editContext";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import axios from "axios";

const Footer = () => {
  const { employeeData, setErrorStatus, selectedIdState } = useCommon();
  const { pageState, setPageState, setinputNumErrorFlag, setinputNullFlag, setclickFlag } =
    useEdit();

  const handleReturn = () => {
    setinputNumErrorFlag(false);
    setinputNullFlag(false);
    setclickFlag(false);
    setPageState("init");
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:8080/api/update/`, {
        id: selectedIdState,
        newData: employeeData,
      });

      if (response.status === 200) {
        setPageState("succeeded");
        setErrorStatus(response.status);
      } else {
        setinputNumErrorFlag(false);
        setinputNullFlag(false);
        setclickFlag(false);
        setPageState("init");
        setErrorStatus(response.status);

      }
    } catch (error) {
      if (error.response && error.response.status) {
        setinputNumErrorFlag(false);
        setinputNullFlag(false);
        setclickFlag(false);
        setPageState("init");
        setErrorStatus(error.response.status);

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
        onClick={handleUpdate}
      >
        保存する
      </Button>
    </Box>
  );
};

export default Footer;
