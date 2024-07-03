import { useCreate, CreateProvider } from "../../hook/context";
import { useState } from "react";
import CreateEmployee from "../../components/createEmployeePage";
import CreateConfirm from "../../components/createConfirm";
import Succeeded from "../../components/succeeded";

const Employee = () => {
  // エラーstate、更新関数の設定
  const [errorStatus, setErrorStatus] = useState(null);
  const { pageState } = useCreate();

  // 関数の宣言：エラーstateの変更
  const handleSaveError = (status) => {
    setErrorStatus(status);
  };

  return (
    <>
      {pageState === "create" && <CreateEmployee errorStatus={errorStatus} />}
      {pageState === "confirm" && (
        <CreateConfirm onSaveError={handleSaveError} />
      )}
      {pageState === "succeeded" && <Succeeded />}
    </>
  );
};

const EmployeePage = () => {
  return (
    <CreateProvider>
      <Employee />
    </CreateProvider>
  );
};

export default EmployeePage;
