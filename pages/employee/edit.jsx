import { useEdit } from "../../hook/editContext";
import { EditProvider } from "../../hook/editContext";
import Edit from "../../components/employee/edit/edit";
import EditConfirm from "../../components/employee/editConfirm/editConfirm";
import EditSuceeded from "../../components/employee/editSucceeded/editSucceeded";

const Employee = () => {
  const { pageState } = useEdit();
  return (
    <>
      {pageState === "init" &&  <Edit />}
      {pageState === "confirm" && <EditConfirm />}
      {pageState === "succeeded" && <EditSuceeded />}
    </>
  );
};

const EditPage = () => {
  return (
        <EditProvider>
          <Employee /> 
        </EditProvider>
  );
};

export default EditPage;
