import { createContext } from "react";

export const CarrinhoContext = createContext();

// Define um provider, caso contrário seria necessário criar dessa forma no componente que o utiliza.
export const CarrinhoProvider = ({ children }) => {
  return <CarrinhoContext.Provider> {children} </CarrinhoContext.Provider>;
};
