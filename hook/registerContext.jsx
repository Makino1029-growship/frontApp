import { createContext, useContext, useState } from "react";

const CreateContext = createContext();

const CreateProvider = ({ children }) => {
  //社員情報state、更新関数の宣言
  const [employeeData, setEmployeeData] = useState({
    employeeNum: "",
    name: "",
    address: "",
    tel: "",
    degree: "",
  });

  //ページstateの宣言　初期値は新規登録ページに設定（後で変更予定）
  const [pageState, setPageState] = useState("create");

  //コンポーネント間で共有するstateを設定
  const value = {
    employeeData,
    setEmployeeData,
    pageState,
    setPageState,
  };

  return (
    //どのコンポーネントからでも社員情報state、ページstateにアクセスできるよう設定
    <CreateContext.Provider value={value}>{children}</CreateContext.Provider>
  );
};

const useCreate = () => useContext(CreateContext);
export { useCreate, CreateProvider };
