import Header from "./parts/header";
import Table from "./parts/table";
import { useCommon } from "../../../hook/commonContext";
import Footer from "./parts/footer";

const List = ({ message }) => {
  return (
    <>
      <Header />
      <Table  items = { message } />
      <Footer />
    </>
  );
};

export default List;