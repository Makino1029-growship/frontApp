import { useCreate } from "../../../../hook/employeeContext";
import { useCommon } from "../../../../hook/commonContext";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";
import React, { useState, createContext, useContext } from "react";

const Table = () => {
  const { selectedIDState, detailEmployeeData, setDetailEmployeeData } =
    useCreate();
  const { setErrorStatus, errorStatus } = useCommon();

  const [test, setTest] = useState("init");
  // useEffect(() => {

  //   setTest("here")
  // }, []);

  useEffect(() => {
    // リクエスト：IDに紐づいた社員情報を取得
    const fetchdetailEmployeeData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/detaila`, {
          params: {
            id: selectedIDState,
          },
        });
        const data = response.data;

        setDetailEmployeeData({
          employeeNum: data[0].employeeNum,
          name: data[0].name,
          address: data[0].address,
          tel: data[0].tel,
          degree: data[0].degree,
        });

        if (response.status === 200) {
          // setErrorStatus(response.status);
          console.log("passed Succeed");
        } else {
        }
      } catch (error) {
        if (error.response && error.response.status) {
          // setErrorStatus(error.response.status);
          console.log("passed Err");
          console.log("ERRNUM", error.response.status);
          // setTest(error.response.status);
          // setErrorStatus("こんにちは");
        } else {
        }
      }
    };
    setErrorStatus("ErrorStatusは値変更済");
    setTest("testは値変更済")
    fetchdetailEmployeeData();
  }, []);

  console.log("detailEmployeeData:", detailEmployeeData);
  return (
    <>
      {/* {errorStatus == 200 && (
        <Box sx={{ textAlign: "center" }}>
          <Box sx={{ marginBottom: "1rem" }}>
            <TextField
              id="outlined-required"
              label="社員番号"
              sx={{ width: "40%" }}
              value={detailEmployeeData.employeeNum}
            />
          </Box>

          <Box sx={{ marginBottom: "1rem" }}>
            <TextField
              id="outlined-required"
              label="氏名"
              sx={{ width: "40%" }}
              value={detailEmployeeData.name}
            />
          </Box>

          <Box sx={{ marginBottom: "1rem" }}>
            <TextField
              id="outlined-required"
              label="住所"
              sx={{ width: "40%" }}
              value={detailEmployeeData.address}
            />
          </Box>

          <Box sx={{ marginBottom: "1rem" }}>
            <TextField
              id="outlined-required"
              label="電話番号"
              sx={{ width: "40%" }}
              value={detailEmployeeData.tel}
            />
          </Box>

          <Box sx={{ marginBottom: "1rem" }}>
            <TextField
              id="outlined-required"
              label="職位"
              sx={{ width: "40%" }}
              value={detailEmployeeData.degree}
            />
          </Box>
        </Box>
      )} */}

      {errorStatus}
      {test}
    </>
  );
};

export default Table;







