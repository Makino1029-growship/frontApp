import { createContext, useContext, useState } from "react";

const CreateContext = createContext();
const CreateSetContext = createContext();

const CreateProvider = ({ children }) => {
  //社員情報state、更新関数の宣言
  const [employeeData, setEmployeeData] = useState({
    employeeNum: '',
    name: '',
    address: '',
    tel: '',
    degree: '',
  });

  return (
    //どのコンポーネントからでも社員情報stateにアクセスできるよう設定
    <CreateContext.Provider value={ employeeData }>
      <CreateSetContext.Provider value={ setEmployeeData }>
        {children}
      </CreateSetContext.Provider>
    </CreateContext.Provider>
  );
};

const useCreate = () => useContext(CreateContext);
const useSetCreate = () => useContext(CreateSetContext);
export { useCreate, useSetCreate, CreateProvider };
