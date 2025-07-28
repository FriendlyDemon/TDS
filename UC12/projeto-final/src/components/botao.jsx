import React from "react";
import "../styles/botao.css";

function BotaoLaranja(props) {
  return <button className="botao-laranja botao">{props.texto}</button>;
}
function BotaoBranco(props) {
  return <button className="botao-branco botao">{props.texto}</button>;
}

export default BotaoLaranja;
export { BotaoBranco, BotaoLaranja };
