import { useCreate, CreateProvider } from "../../hook/employeeContext";
import { useCommon, CommonProvider } from "../../hook/commonContext";
import { useState } from "react";
import CreateEmployee from "../../components/employee/register/parts/register";
import CreateConfirm from "../../components/employee/registerConfirm/registerConfirm";
import Succeeded from "../../components/employee/registerSucceeded/registerSucceeded";
import EmployeeDetail from "../../components/employee/detail/employeeDetail";
import TopPage from "../../components/employee/list/list";
import axios from "axios";

const Employee = () => {
  // エラーstate、更新関数の設定
  const { pageState } = useCreate();

  // 関数の宣言：エラーstateの変更
  const handleSaveError = (status) => {
    setErrorStatus(status);
  };

  return <>{pageState === "" && <EmployeeDetail />}</>;
};

const DetailPage = () => {
  return (
    <CommonProvider>
    <CreateProvider>
      <Employee />
    </CreateProvider>
    </CommonProvider>

  );
};

export default DetailPage;
