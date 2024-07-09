import { useCommon } from "../../../../hook/commonContext";
import { useEdit } from "../../../../hook/editContext";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import axios from "axios";

const Footer = () => {
  const { employeeData, setErrorStatus, selectedIdState } = useCommon();
  const { setPageState, setinputNumErrorFlag, setinputNullFlag, setclickFlag } =
    useEdit();

  const handleReturn = () => {
    setinputNumErrorFlag(false);
    setinputNullFlag(false);
    setclickFlag(false);
    setPageState("init");
  };

  const handleUpdate = async () => {
    try {
      console.log("Passed handleUpdate try");
      console.log("employeeData:",employeeData)
      const response = await axios.put(`http://localhost:8080/api/update/`, {
        id: selectedIdState,
        newData: employeeData,
      });

      if (response.status === 200) {
        setErrorStatus(response.status);
        setPageState("editSucceeded");
      } else {
        setErrorStatus(response.status);
        setPageState("edit");
      }
      console.log("Passed Succeed");
    } catch (error) {
      if (error.response && error.response.status) {
        setErrorStatus(error.response.status);
        setPageState("edit");
      } else {
      }
      console.log("Passed ERR");
      console.log(error)
    }
    setPageState("succeeded");
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
