import { createContext, useEffect, useState } from "react";

export type DataProps = {
    email: string;
    password: string;
    confirmPassword: string;
    name: string;
    birtDate: number;
    cel: number;
    sex: string;
    peso: number;
    alt: number;
    insulina: string;
    typeDiabete: string;
};

interface ContextProps {
    children?: React.ReactNode;
}

export interface DataContext {
    values: DataProps[];
    setValues: React.Dispatch<DataProps[]>;
}

export const ValuesContext = createContext<DataContext>({} as DataContext);

export const ValuesProvider: React.FC<ContextProps> = ({ children }) => {
    const initialValues = JSON.parse(localStorage.getItem("user")!);
    const [values, setValues] = useState<DataProps[]>(initialValues);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(values));
    }, [values]);

    return (
        <ValuesContext.Provider value={{ values, setValues }}>
            {children}
        </ValuesContext.Provider>
    );
};
