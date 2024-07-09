import { useRegister } from "../../hook/registerContext";
import { RegisterProvider } from "../../hook/registerContext";
import Register from "../../components/employee/register/register";
import RegisterConfirm from "../../components/employee/registerConfirm/registerConfirm";
import RegisterSuceeded from "../../components/employee/registerSucceeded/registerSucceeded";

const Employee = () => {
  const { pageState } = useRegister();
  return (
    <>
      {pageState === "init" &&  <Register />}
      {pageState === "confirm" && <RegisterConfirm />}
      {pageState === "succeeded" && <RegisterSuceeded />}
    </>
  );
};

const RegisterPage = () => {
  return (
        <RegisterProvider>
          <Employee /> 
        </RegisterProvider>
  );
};

export default RegisterPage;
