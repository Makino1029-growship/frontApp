import { useCommon } from "../../../../hook/commonContext";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Table = () => {
  const { employeeData, errorStatus } = useCommon();

  return (
    <>
      {errorStatus == 200 && (
        <Box sx={{ textAlign: "center" }}>
          <Box sx={{ marginBottom: "1rem" }}>
            <TextField
              id="outlined-required"
              label="社員番号"
              sx={{ width: "40%" }}
              value={employeeData.employeeNum}
            />
          </Box>

          <Box sx={{ marginBottom: "1rem" }}>
            <TextField
              id="outlined-required"
              label="氏名"
              sx={{ width: "40%" }}
              value={employeeData.name}
            />
          </Box>

          <Box sx={{ marginBottom: "1rem" }}>
            <TextField
              id="outlined-required"
              label="住所"
              sx={{ width: "40%" }}
              value={employeeData.address}
            />
          </Box>

          <Box sx={{ marginBottom: "1rem" }}>
            <TextField
              id="outlined-required"
              label="電話番号"
              sx={{ width: "40%" }}
              value={employeeData.tel}
            />
          </Box>

          <Box sx={{ marginBottom: "1rem" }}>
            <TextField
              id="outlined-required"
              label="職位"
              sx={{ width: "40%" }}
              value={employeeData.degree}
            />
          </Box>
        </Box>
      )}

    </>
  );
};

export default Table;
