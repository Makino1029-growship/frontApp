import { CreateProvider } from "../context/Context";
import CreateEmployee from "../components/CreateEmployeePage";

const Page = () => {
  return (
    <CreateProvider>
      <CreateEmployee />
    </CreateProvider>
  );
};

export default Page;