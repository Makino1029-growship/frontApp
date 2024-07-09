import { useCommon, CommonProvider } from "../../hook/commonContext";
import { useCreate, CreateProvider } from "../../hook/employeeContext";
import { RegisterProvider } from "../../hook/registerContext";
import { useContext } from "react"; // useContextを追加
import Register from "../../components/employee/register/register";
import RegisterConfirm from "../../components/employee/registerConfirm/registerConfirm";
import RegisterSuceeded from "../../components/employee/registerSucceeded/registerSucceeded";
import EmployeeDetail from "../../components/employee/detail/employeeDetail";
import TopPage from "../../components/employee/list/list";

const Employee = () => {
  // const { pageState } = useContext(useCreate());  // useContextを使用してpageStateを取得

  // const pageState = ""
  const { pageState } = useCommon();
  console.log("pageState", pageState);

  return (
    <>
      {pageState === "init" && <Register />}
      {pageState === "confirm" && <RegisterConfirm />}
      {pageState === "succeeded" && <RegisterSuceeded />}
    </>
  );
};

const RegisterPage = () => {
  return (
    <CommonProvider>
      <CreateProvider>
        <RegisterProvider>
          <Employee /> {/* EmployeeコンポーネントにpageStateが渡される */}
        </RegisterProvider>
      </CreateProvider>
    </CommonProvider>
  );
};

export default RegisterPage;
