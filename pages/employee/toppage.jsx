import { CreateProvider } from "../../hook/employeeContext";
import { useCommon, CommonProvider } from "../../hook/commonContext";
import EmployeeDetail from "../../components/employee/detail/employeeDetail";
import List from "../../components/employee/list/list";
import axios from "axios";

const Employee = ({ message, initErrorStatus }) => {
  // エラーstate、更新関数の設定
  const { pageState, setErrorStatus } = useCommon();
  setErrorStatus(initErrorStatus)

  console.log("pageState:", pageState);
  console.log("initErrorState:",initErrorStatus)

  return (

    <>
  {pageState === "init" && <List message={message} />}
  {pageState === "detail" && <EmployeeDetail message={message} />}
  </>
  )
};

export async function getServerSideProps() {
  let message = null;
  let initErrorStatus = null;
  try {
    const response = await axios.get("http://localhost:8080/api/show");
    message = response.data;
    initErrorStatus = response.status;
    console.log("asuu",initErrorStatus);
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

const TopPage = ({ message, initErrorStatus }) => {

  return (
    <CommonProvider>
      <CreateProvider>
        <Employee message={message} initErrorStatus={initErrorStatus} />
      </CreateProvider>
    </CommonProvider>
  );
};

export default TopPage;
