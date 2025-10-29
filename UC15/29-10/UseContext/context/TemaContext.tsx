import React, {
  createContext,
  useState,
  useContext,
  type ReactNode,
} from "react";

// =====================================
// 1️⃣ Tipo do contexto
// =====================================
// Aqui definimos o "formato" dos dados que estarão disponíveis globalmente

interface TemaContextType {
  temaEscuro: boolean; // indica se o tema está escuro (true) ou claro (false)
  setTemaEscuro: React.Dispatch<React.SetStateAction<boolean>>; // função para mudar o tema
}

// =====================================
// 2️⃣ Criando o contexto
// =====================================

// Aqui estamos fazendo a criação do contexto em si — o “objeto global” que vai guardar e compartilhar informações (no caso, o estado do tema) entre os componentes da aplicação React.
// Inicialmente é undefined, pois só existe quando o Provider envolver o app
const TemaContext = createContext<TemaContextType | undefined>(undefined);

// =====================================
// 3️⃣ Provider (fornecedor dos dados)
// =====================================
// Ele "envolve" a aplicação e permite que todos os filhos
// acessem o tema sem precisar de props
export const TemaProvider = (props: { children: ReactNode }) => {
  const [temaEscuro, setTemaEscuro] = useState(false); // tema inicial = claro

  return (
    <TemaContext.Provider value={{ temaEscuro, setTemaEscuro }}>
      {props.children}
    </TemaContext.Provider>
  );
};

// =====================================
// 4️⃣ Hook personalizado para usar o contexto
// =====================================
// Evita precisar escrever useContext(TemaContext) toda hora
export const useTema = (): TemaContextType => {
  const context = useContext(TemaContext);
  if (!context)
    throw new Error("useTema deve ser usado dentro de um TemaProvider");
  return context;
};
