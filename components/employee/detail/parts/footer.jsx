import { useCommon } from "../../../../hook/commonContext";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import axios from "axios";

const Footer = () => {
  const { errorStatus, selectedIdState,setEmployeeData } = useCommon();

  const router = useRouter();

  // 戻るボタン押下時の処理
  const handleReturn = () => {
    router.push("./toppage");

  };

  // ※未設定　編集ボタン押下時の処理
  const handleEdit = async() => {
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
    
    router.push("./edit")

  };
  

  return (
    <>
      {/* 戻るボタン */}
      {errorStatus == 200 && (
        <Box sx={{ marginTop: "3.7rem", marginBottom: "15rem" }}>
          <Button
            variant="contained"
            sx={{
              position: "absolute",
              right: 400,
              fontSize: "1.0rem",
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
              fontSize: "1.0rem",
              width: "15%",
            }}
            onClick={handleEdit}
          >
            編集する
          </Button>
        </Box>
      )}
    </>
  );
};

export default Footer;
