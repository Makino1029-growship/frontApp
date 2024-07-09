import { createContext, useContext, useState } from "react";

const registerContext = createContext();
const RegisterProvider = ({ children }) => {
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
    <registerContext.Provider value={value}>
      {children}
    </registerContext.Provider>
  );
};

const useRegister = () => useContext(registerContext);
export { useRegister, RegisterProvider };
