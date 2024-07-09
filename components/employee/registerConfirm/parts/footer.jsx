import { useCreate } from "../../../../hook/employeeContext";
import { useCommon } from "../../../../hook/commonContext";
import { useRegister } from "../../../../hook/registerContext";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import axios from "axios";

const Footer = () => {
  const { employeeData } = useCreate();
  const { pageState, setPageState, setErrorStatus } = useCommon();
  const { setinputNumErrorFlag, setinputNullFlag, setclickFlag } =
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
      console.log(employeeData);
      console.log(response.status);

      console.log("Here");

      if (response.status === 200) {
        setErrorStatus(response.status);
        setPageState("succeeded");
        console.log("no1 passed");
        console.log("pageState:", "succeeded");
      } else {
        setinputNumErrorFlag(false);
        setinputNullFlag(false);
        setclickFlag(false);
        setErrorStatus(response.status);
        setPageState("init");
        console.log("no2 passed");
      }
    } catch (error) {
      if (error.response && error.response.status) {
        setinputNumErrorFlag(false);
        setinputNullFlag(false);
        setclickFlag(false);
        setErrorStatus(error.response.status);
        setPageState("init");
        console.log("no3 passed");
      } else {
      }
    }
    console.log("pageState:", pageState);
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
        onClick={handleCreate}
      >
        登録する
      </Button>
    </Box>
  );
};

export default Footer;
