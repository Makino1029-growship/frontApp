import { createContext, useContext, useState } from "react";

const editContext = createContext();
const EditProvider = ({ children }) => {
  // 数値入力項目のエラーチェック用のstate、更新関数の宣言
  const [inputNumErrorFlag, setinputNumErrorFlag] = useState(false);

  // nullチェック用のstate、更新関数の宣言
  const [inputNullFlag, setinputNullFlag] = useState(false);

  // 保存ボタンを押したか判別する用のstate、更新関数の宣言
  const [clickFlag, setclickFlag] = useState(false);

  const [pageState, setPageState] = useState("init");

  const value = {
    inputNumErrorFlag,
    setinputNumErrorFlag,
    inputNullFlag,
    setinputNullFlag,
    clickFlag,
    setclickFlag,
    pageState,
    setPageState,
  };
  return (
    // どのコンポーネントからでも社員情報state、ページstateにアクセスできるよう設定
    <editContext.Provider value={value}>
      {children}
    </editContext.Provider>
  );
};

const useEdit = () => useContext(editContext);
export { useEdit, EditProvider };
