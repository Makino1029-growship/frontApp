import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useCreate } from "../hook/registerContext";
import axios from "axios";

const TopPage = ({ message }) => {
  console.log(message);

  const { setPageState } = useCreate();
  const goToCreatePage = () => {
    setPageState("create");
  };

  return (
    <Box sx={{ textAlign: "center" }}>
      <Box sx={{ marginTop: "18rem" }}>
        <h3>▶社員情報一覧</h3>
        {message ? (
          <Button
            variant="contained"
            sx={{
              position: "absolute",
              right: 500,
              fontSize: "1.0rem",
              width: "20%",
            }}
            onClick={goToCreatePage}
          >
            社員情報を新規登録する
          </Button>
        ) : (
          <p>Loading...</p>
        )}
      </Box>
    </Box>
  );
};

// export async function getServerSideProps() {
//   // let serverData = null;
//   // try {
//   //   const response = await axios.get("http://localhost:8080/api/show");
//   //   // serverData = response.data;
//   //   // console.log(serverData); // データがコンソールに表示されるか確認
//   // } catch (error) {
//   //   console.error("データ取得中にエラーが発生しました:", error); // エラーがコンソールに表示されるか確認
//   // }

//   return {
//     props: {
//       serverData:"aaaa"
//     }
//   };
// }

export async function getServerSideProps(){

  return{
      // redirect:{
      //     destination: '/',
      //     permanent: false
      // },
      props: {message:'From Server Side Pops'}
  }

}

export default TopPage;
