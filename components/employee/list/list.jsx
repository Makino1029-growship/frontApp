import Header from "./parts/header";
import Table from "./parts/table";

const List = ({ message }) => {
  return (
    <>
      <Header />
      <Table  items = { message } />
    </>
  );
};

export default List;