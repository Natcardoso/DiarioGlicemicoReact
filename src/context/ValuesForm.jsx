import { createContext, useEffect, useState } from "react";

export const ValuesContext = createContext();

export const ValuesProvider = ({ children }) => {
    const initialValues = JSON.parse(localStorage.getItem("user")) || [];
    const [values, setValues] = useState(initialValues);

    const initialRegisterGlicemia =
        JSON.parse(localStorage.getItem("registerGlicemia")) || [];
    const [valuesRegisterTable, setValuesRegisterTable] = useState(
        initialRegisterGlicemia
    );

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(values));
    }, [values]);

    useEffect(() => {
        localStorage.setItem(
            "registerGlicemia",
            JSON.stringify(valuesRegisterTable)
        );
    }, [valuesRegisterTable]);

    return (
        <ValuesContext.Provider
            value={{
                values,
                setValues,
                valuesRegisterTable,
                setValuesRegisterTable,
            }}
        >
            {children}
        </ValuesContext.Provider>
    );
};
