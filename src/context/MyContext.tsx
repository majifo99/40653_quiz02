import React from "react";

type Product = {
    id: number;
    name: string;
    step: number;
    price: number;
}

type MyContextData = {
    products: Product[];
    currentStep: number;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

const MyContext = React.createContext<MyContextData>({
  
    products: [],
    currentStep: 1,
    setCurrentStep: () => {}
});

export default MyContext;