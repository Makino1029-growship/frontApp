import React, { useState, createContext, useContext } from "react";
const CommonContext = createContext();

const CommonProvider = ({ children }) => {

    const [errorStatus, setErrorStatus] = useState("init");
    const [pageState, setPageState] = useState("init");
    const handleSaveError = (status) => {
        setErrorStatus(status);
      };

      const value = {
        pageState, setPageState, errorStatus, setErrorStatus, onSaveError: handleSaveError 

      }

return(
    <CommonContext.Provider value={value}>{children}</CommonContext.Provider>

)
}

const useCommon = () => useContext(CommonContext);
export{ useCommon, CommonProvider}