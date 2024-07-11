import { useCommon } from "../../../../hook/commonContext";
import { useEdit } from "../../../../hook/editContext";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import axios from "axios";

const Footer = () => {
  const { selectedIdState, errorStatus, employeeData, setErrorStatus } =
    useCommon();
  const router = useRouter();

  const {
    inputNumErrorFlag,
    setinputNumErrorFlag,
    inputNullFlag,
    setinputNullFlag,
    setclickFlag,
    setPageState,
  } = useEdit();

  const handleReturn = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/detail`, {
        params: {
          id: selectedIdState,
        },
      });
      const data = response.data;

      setEmployeeData({
        employeeNum: data[0].employeeNum,
        name: data[0].name,
        address: data[0].address,
        tel: data[0].tel,
        degree: data[0].degree,
      });

      if (response.status === 200) {
        setErrorStatus(response.status);
      }
    } catch (error) {
      if (error.response && error.response.status) {
        setErrorStatus(error.response.status);
      }
    }
    router.push("./detail");
  };
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

  return (
    <>
      {errorStatus == 200 && (
        <Box sx={{ marginTop: "3rem", marginBottom: "15rem" }}>
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

          <Button
            variant="contained"
            sx={{
              position: "absolute",
              right: 170,
              fontSize: "1.0rem",
              width: "150px",
              height: "40px",
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
