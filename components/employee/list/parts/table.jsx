import { useCommon } from "../../../../hook/commonContext";
import { useRouter } from "next/router";
import { Box, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff0000", // 赤色を指定
    },
  },
});

const ListTable = ({ items }) => {
  const ITEMS_PER_PAGE = 7;
  const { setEmployeeData, errorStatus, setErrorStatus, setSelectedIdState } =
    useCommon();

  // ページ(社員情報一覧の各ページのどれを表示するか)をステイトで管理
  const [page, setPage] = useState(1);

  // 関数の宣言：各ページボタンクリック時の処理
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const router = useRouter();

  // 関数の宣言：社員情報詳細（社員名）クリック時の処理
  const handleClick = async (id) => {
    setSelectedIdState(id);
    router.push("./detail");

    // リクエスト：IDに紐づいた社員情報を取得

    try {
      const response = await axios.get(`http://localhost:8080/api/detail`, {
        params: {
          id: { id }.id,
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
  };

  // 現在のページの値をもとに、表示する社員情報のstartIndexを計算
  const startIndex = (page - 1) * ITEMS_PER_PAGE;

  // ページに表示する社員情報の部分配列を作成　startIndex ～ startIndex + ITEMS_PER_PAGE番目まで
  if (items !== null) {
    const paginatedItems = items.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    return (
      <>
        {paginatedItems.length == 0 && (
          <Box
            sx={{
              textAlign: "center",
              marginTop: "3rem",
              marginBottom: "6rem",
            }}
          >
            <ThemeProvider theme={theme}>
              <Typography
                variant="p"
                color="primary"
                sx={{
                  right: 200,
                  fontSize: "1.3rem",
                  width: "30%",
                }}
              >
                データがありません。社員情報を登録してください。
              </Typography>
            </ThemeProvider>
          </Box>
        )}
        {errorStatus === 200 && paginatedItems.length !== 0 && (
          <Box
            sx={{
              textAlign: "center",
              marginTop: "3rem",
              marginBottom: "4rem",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <TableContainer
                component={Paper}
                sx={{ maxWidth: "95%", margin: "auto" }}
              >
                <Table>
                  <TableHead>
                    <TableRow sx={{ backgroundColor: "#f0f0f0" }}>
                      <TableCell sx={{ fontWeight: "bold", color: "#333333" }}>
                        社員番号
                      </TableCell>
                      <TableCell sx={{ fontWeight: "bold", color: "#333333" }}>
                        名前
                      </TableCell>
                      <TableCell sx={{ fontWeight: "bold", color: "#333333" }}>
                        役職
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
  {paginatedItems.map((row, index) => (
    <TableRow
      key={index}
      button
      onClick={() => handleClick(row.id)}
      sx={{
        '&:hover': {
          backgroundColor: '#ffffff', // 白色の背景色
          boxShadow: '0px 0px 5px rgba(0,0,0,0.2)', // 少しの影を追加
          border: '1px solid #cccccc', // 境界線を追加
        },
      }}
    >
      <TableCell>{row.employeeNum}</TableCell>
      <TableCell>{row.name}</TableCell>
      <TableCell>{row.degree}</TableCell>
    </TableRow>
  ))}
</TableBody>

                </Table>
              </TableContainer>
              {/* ページボタンの表示 */}
              <Pagination
                count={Math.ceil(items.length / ITEMS_PER_PAGE)}
                page={page}
                onChange={handlePageChange}
                style={{ marginTop: "1rem", justifyContent: "center" }}
                sx={{
                  position: "absolute",
                  right: 420,
                  fontSize: "1.0rem",
                  width: "30%",
                }}
              />
            </div>
          </Box>
        )}
      </>
    );
  }
};

export default ListTable;
