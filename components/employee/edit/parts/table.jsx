import { degreeOptions } from "../../../../constant/degreeOption";
import { useCommon } from "../../../../hook/commonContext";
import { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const Table = () => {
  const { errorStatus, employeeData, setEmployeeData } = useCommon();
  const [ inputValue, setInputValue ] = useState("");
  const inputChange = (e, type) => {
    setEmployeeData({
      ...employeeData,
      [type]: e.target.value,
    });
  };

  return (
    <>
    {errorStatus == 200 && (


      <Box sx={{ textAlign: "center" }}>
        <Box sx={{ marginBottom: "1rem" }}>
          {/* 社員情報入力項目 */}
          <TextField
            id="outlined-required"
            label="社員番号"
            sx={{ width: "40%" }}
            onChange={(e) => inputChange(e, "employeeNum")}
            value={employeeData.employeeNum}
            />
        </Box>
        <Box sx={{ marginBottom: "1rem" }}>
          <TextField
            id="outlined-required"
            label="氏名"
            sx={{ width: "40%" }}
            onChange={(e) => inputChange(e, "name")}
            value={employeeData.name}
            />
        </Box>

        <Box sx={{ marginBottom: "1rem" }}>
          <TextField
            id="outlined-required"
            label="住所"
            sx={{ width: "40%" }}
            onChange={(e) => inputChange(e, "address")}
            value={employeeData.address}
            />
        </Box>

        <Box sx={{ marginBottom: "1rem" }}>
          <TextField
            id="outlined-required"
            label="電話番号"
            sx={{ width: "40%" }}
            onChange={(e) => inputChange(e, "tel")}
            value={employeeData.tel}
            />
        </Box>

        <Box sx={{ marginBottom: "1rem" }}>
          <Autocomplete
            value={employeeData.degree}
            onChange={(event, newValue) => {
              setEmployeeData({
                ...employeeData,
                degree: newValue,
              });
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
              setEmployeeData({
                ...employeeData,
                degree: newInputValue,
              });
            }}
            id="controllable-states-demo"
            options={degreeOptions}
            sx={{ width: "40%", marginLeft: "30%" }}
            renderInput={(params) => <TextField {...params} label="職位" />}
            />
        </Box>
      </Box>
  )}
    </>
  );
};

export default Table;
