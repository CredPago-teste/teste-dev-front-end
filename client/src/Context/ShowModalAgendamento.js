import React, { createContext, useState, useContext } from "react";

const ShowModalAgendamentoContext = createContext();

export default function ShowModalAgendamentoProvider({ children }) {
  const [showModalAgendamento, setShowModalAgendamento] = useState(false);

  return (
    <ShowModalAgendamentoContext.Provider
      value={{
        showModalAgendamento,
        setShowModalAgendamento,
      }}
    >
      {children}
    </ShowModalAgendamentoContext.Provider>
  );
}

export function useShowModalAgendamento() {
  const context = useContext(ShowModalAgendamentoContext);

  const { showModalAgendamento, setShowModalAgendamento } = context;
  return { showModalAgendamento, setShowModalAgendamento };
}
