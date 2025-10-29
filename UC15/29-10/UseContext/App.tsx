import React from "react";
import { TemaProvider } from "./context/TemaContext";
import { Tela } from "./components/Tela";
import { TelaUsuario } from "./components/TelaUser";
import { UserProvider } from "./context/UserContext";

// =====================================
// O TemaProvider envolve a tela inteira
// =====================================
export default function App() {
  return (
    <TemaProvider>
      <UserProvider>
        <Tela />
        <TelaUsuario />
      </UserProvider>
    </TemaProvider>
  );
}
