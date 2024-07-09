import Header from "./parts/header";
import Table from "./parts/table";
import Footer from "./parts/footer";
import { useCommon } from "../../../hook/commonContext";

const List = ({ message }) => {
  const { errorStatus } = useCommon();

  console.log("hi:",errorStatus)
  return (
    <>
      <Header />
      <Table  items = { message } />
      <Footer />
    </>
  );
};

export default List;