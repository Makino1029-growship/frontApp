import { useCommon } from "../../../../hook/commonContext";
import { useEdit } from "../../../../hook/editContext";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const Footer = () => {
  const { errorStatus, employeeData } = useCommon();
  const router = useRouter();

  const {
    inputNumErrorFlag,
    setinputNumErrorFlag,
    inputNullFlag,
    setinputNullFlag,
    setclickFlag,
    setPageState,
  } = useEdit();

  const handleReturn = () =>{
    router.push("./detail");

  }
  const handleSave = () => {
    setclickFlag(true);


    //バリデーション（数値チェック）
    if (
      !isNaN(employeeData.employeeNum) &&
      !isNaN(employeeData.tel) &&
      employeeData.employeeNum.length === 5 &&
      (employeeData.tel.length === 10 || employeeData.tel.length === 11)
    ) {
      setinputNumErrorFlag(true);
    } else {
      setinputNumErrorFlag(false);
    }

    // バリデーション（nullチェック）
    if (
      employeeData.employeeNum !== "" &&
      employeeData.name !== "" &&
      employeeData.address !== "" &&
      employeeData.tel !== "" &&
      employeeData.degree !== null &&
      employeeData.degree !== ""
    ) {
      setinputNullFlag(true);
    } else {
      setinputNullFlag(false);
    }
  };
  
  useEffect(() => {
    if (inputNullFlag && inputNumErrorFlag) {
      setPageState("confirm");
    }
  }, [inputNullFlag, inputNumErrorFlag]);

  return (<>
    {errorStatus == 200 && (
      
      
      <Box sx={{ marginTop: "3rem", marginBottom: "15rem" }}>
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
      
      <Button
      variant="contained"
      sx={{
        position: "absolute",
        right: 170,
        fontSize: "1.2rem",
        width: "15%",
      }}
      onClick={handleSave}
      >
      確認する
      </Button>
      </Box>
    )}

    </>
  );
};

export default Footer;
