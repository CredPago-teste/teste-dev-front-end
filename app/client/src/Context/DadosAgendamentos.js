import React, { createContext, useState, useContext } from "react";

const DadosAgendamentosContext = createContext();

export default function DadosAgendamentosProvider({ children }) {
  const [dadosAgendamentos, setDadosAgendamentos] = useState([]);

  return (
    <DadosAgendamentosContext.Provider
      value={{
        dadosAgendamentos,
        setDadosAgendamentos,
      }}
    >
      {children}
    </DadosAgendamentosContext.Provider>
  );
}

export function useDadosAgendamentos() {
  const context = useContext(DadosAgendamentosContext);

  const { dadosAgendamentos, setDadosAgendamentos } = context;
  return { dadosAgendamentos, setDadosAgendamentos };
}
