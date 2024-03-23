import { useState } from "react";
import MyContext from "./MyContext";

export interface IThemeProviderProps {
    children: React.ReactNode;
}  
  // Create a ThemeProvider component to provide the context value to child components
  export const MyProvider: React.FC<IThemeProviderProps> = ({ children }) => {
    const [currentStep, setCurrentStep] = useState(1);
    return (
      <MyContext.Provider value={{currentStep, setCurrentStep }} >
         {children}
      </MyContext.Provider>
    );
  };