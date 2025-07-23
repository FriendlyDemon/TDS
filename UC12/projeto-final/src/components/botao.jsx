import React from "react";
import "../styles/botao.css";

function BotaoLaranja(props) {
  return <button className="botao-laranja">{props.texto}</button>;
}
function BotaoBranco(props) {
  return <button className="botao-branco">{props.texto}</button>;
}

export default BotaoLaranja;
export { BotaoBranco, BotaoLaranja };
