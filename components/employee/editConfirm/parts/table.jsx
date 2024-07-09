import { useCommon } from "../../../../hook/commonContext";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const Table = () => {
  const { employeeData } = useCommon();
  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          mb: 2,
          fontSize: "1.5rem",
          marginTop: "2rem",
          marginBottom: "3rem",
        }}
      >
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
    </>
  );
};

export default Table;
