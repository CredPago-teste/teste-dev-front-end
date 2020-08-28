import React, { createContext, useState, useContext } from "react";

const IdAtualizacaoContext = createContext();

export default function IdAtualizacaoProvider({ children }) {
  const [idAtualizacao, setIdAtualizacao] = useState({});

  return (
    <IdAtualizacaoContext.Provider
      value={{
        idAtualizacao,
        setIdAtualizacao,
      }}
    >
      {children}
    </IdAtualizacaoContext.Provider>
  );
}
export function useIdAtualizacao() {
  const context = useContext(IdAtualizacaoContext);

  const { idAtualizacao, setIdAtualizacao } = context;
  return { idAtualizacao, setIdAtualizacao };
}
