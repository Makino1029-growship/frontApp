import { useCommon } from "../../hook/commonContext";
import List from "../../components/employee/list/list";
import axios from "axios";

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

const TopPage = ({ message, initErrorStatus }) => {
  const { setErrorStatus } = useCommon();
  setErrorStatus(initErrorStatus);
  return <List message={message} />;
};

export default TopPage;
