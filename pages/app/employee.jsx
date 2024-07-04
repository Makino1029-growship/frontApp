import { useCreate, CreateProvider } from "../../hook/employeeContext";
import { useState } from "react";
import CreateEmployee from "../../components/parts/register/CreateEmployeePage";
import CreateConfirm from "../../components/parts/register/CreateConfirm";
import Succeeded from "../../components/parts/register/Succeeded";
import EmployeeDetail from "../../components/parts/get/employeeDetail";
import TopPage from "../../components/parts/get/topPage";
import axios from "axios";

const Employee = ({ message, initErrorStatus }) => {
  // エラーstate、更新関数の設定
  const [errorStatus, setErrorStatus] = useState(initErrorStatus);
  const { pageState } = useCreate();

  // 関数の宣言：エラーstateの変更
  const handleSaveError = (status) => {
    setErrorStatus(status);
  };

  return (
    <>
      {pageState === "detail" && (
        <EmployeeDetail
          errorStatus={errorStatus}
          onSaveError={handleSaveError}
        />
      )}
      {pageState === "topPage" && (
        <TopPage message={message} errorStatus={errorStatus} />
      )}
      {pageState === "create" && <CreateEmployee errorStatus={errorStatus} />}
      {pageState === "confirm" && (
        <CreateConfirm onSaveError={handleSaveError} />
      )}
      {pageState === "succeeded" && <Succeeded />}
    </>
  );
};

export async function getServerSideProps() {
  let message = null;
  let initErrorStatus = null;
  try {
    const response = await axios.get("http://localhost:8080/api/show");
    message = response.data;
    initErrorStatus = response.status;
  } catch (error) {
    try {
      initErrorStatus = error.response.status;
    } catch {
      initErrorStatus = 500;
    }
  }

  return {
    props: {
      message,
      initErrorStatus,
    },
  };
}

const EmployeePage = ({ message, initErrorStatus }) => {
  return (
    <CreateProvider>
      <Employee message={message} initErrorStatus={initErrorStatus} />
    </CreateProvider>
  );
};

export default EmployeePage;
