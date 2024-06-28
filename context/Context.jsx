import { createContext, useContext, useState } from "react";

const CreateContext = createContext();
const CreateSetContext = createContext();

const CreateProvider = ({ children }) => {
  const [employeeData, setEmployeeData] = useState();

  return (
    <CreateContext.Provider value={employeeData}>
      <CreateSetContext.Provider value={setEmployeeData}>
        {children}
      </CreateSetContext.Provider>
    </CreateContext.Provider>
  );
};

const useCreate = () => useContext(CreateContext);
const useSetCreate = () => useContext(CreateSetContext);

export { useCreate, useSetCreate, CreateProvider };
