import { List, ListItem, ListItemText } from "@mui/material";
import { useCommon } from "../../../../hook/commonContext";
import { useRouter } from "next/router";
import { Box } from "@mui/material";
import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import axios from "axios";


const Table = ({ items }) => {
  const ITEMS_PER_PAGE = 7;
  const { setEmployeeData, errorStatus, setErrorStatus,setSelectedIdState } = useCommon();

  // ページ(社員情報一覧の各ページのどれを表示するか)をステイトで管理
  const [page, setPage] = useState(1);

  // 関数の宣言：各ページボタンクリック時の処理
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const router = useRouter();

  // 関数の宣言：社員情報詳細（社員名）クリック時の処理
  const handleClick = async (id) => {
    setSelectedIdState(id)
    router.push("./detail");

    // リクエスト：IDに紐づいた社員情報を取得

    try {
      const response = await axios.get(`http://localhost:8080/api/detail`, {
        params: {
          id: {id}.id,
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
  const paginatedItems = items.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <>
      {errorStatus === 200 && (
        <Box
          sx={{
            textAlign: "center",
            marginTop: "2rem",
            marginBottom: "4rem",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <List>
              {paginatedItems.map((item, index) => (
                <ListItem
                  key={item.id}
                  id={item.id}
                  style={{ justifyContent: "center" }}
                  button
                  onClick={() => handleClick(item.id)}
                >
                  <ListItemText
                    primary={`${item.employeeNum} / ${item.name} / ${item.degree}`}
                    style={{ textAlign: "center" }}
                  />
                </ListItem>
              ))}
            </List>

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
};

export default Table;