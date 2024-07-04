import { List, ListItem, ListItemText} from "@mui/material";
import { useCreate } from "../../../hook/employeeContext";
import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";

// 1ページあたりのアイテム数
const ITEMS_PER_PAGE = 7;

const PaginatedList = ({ items }) => {
  // ページ(全ページのうち何を表示するか)、クリックされた社員のIDをステイトで管理
  const { setPageState, selectedIDState, setSelectedIDState } = useCreate();

  // ページ(社員情報一覧の各ページのどれを表示するか)をステイトで管理
  const [page, setPage] = useState(1);

  // 関数の宣言：各ページボタンクリック時の処理
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  // 関数の宣言：社員情報詳細（社員名）クリック時の処理
  const handleClick = (id) => {
    setPageState("detail");
    setSelectedIDState(id);
  };

  // 現在のページの値をもとに、表示する社員情報のstartIndexを計算
  const startIndex = (page - 1) * ITEMS_PER_PAGE;

  // ページに表示する社員情報の部分配列を作成　startIndex ～ startIndex + ITEMS_PER_PAGE番目まで
  const paginatedItems = items.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    // 取得した社員情報一覧の表示
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
  );
};

export default PaginatedList;
