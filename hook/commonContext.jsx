import React, { useState, createContext, useContext } from "react";

const CommonContext = createContext();

const CommonProvider = ({ children }) => {
  const [errorStatus, setErrorStatus] = useState("init");

  const [employeeData, setEmployeeData] = useState({
    employeeNum: "",
    name: "",
    address: "",
    tel: "",
    degree: "",
  });
  
  const value = {
    errorStatus,
    setErrorStatus,
    employeeData,
    setEmployeeData,
  };

  return (
    <CommonContext.Provider value={value}>{children}</CommonContext.Provider>
  );
};

const useCommon = () => useContext(CommonContext);
export { useCommon, CommonProvider };
