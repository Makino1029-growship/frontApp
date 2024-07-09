// import { useCreate } from "../../../hook/employeeContext";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import Box from "@mui/material/Box";
// import { useRouter } from 'next/router';
// import { useCommon } from "../../../hook/commonContext";

// const RegisterSuceeded = () => {
//   // ページState・更新関数
//   const router = useRouter();
//   const { pageState,setPageState, setErrorStatus } = useCommon();


//   // 関数の宣言：TOPページに戻るボタンを押した時の処理
//   const goToTopPage = () => {
//     setPageState("init");
//     router.push('./toppage');
//   };

//   //表示するコンテンツを設定
//   return (
//     <Box sx={{ textAlign: "center" }}>
//       <Box sx={{ marginTop: "18rem" }}>
//         <Box sx={{ textAlign: "center" }}>
//           <Typography variant="p">
//             <h2>社員情報登録が完了しました。</h2>
//           </Typography>
//         </Box>
//         <Button
//           variant="contained"
//           sx={{
//             position: "absolute",
//             right: 500,
//             fontSize: "1.0rem",
//             width: "20%",
//           }}
//           onClick={goToTopPage}
//         >
//           TOPページに戻る
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default RegisterSuceeded;


import Header from "./parts/header";
import Table from "./parts/table";
import Footer from "./parts/footer";

const RegisterSuceeded = () => {
  return (
    <>
      <Header />
      <Table />
      <Footer />
    </>
  );
};

export default RegisterSuceeded;