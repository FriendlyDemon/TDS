import React from "react";
import "../styles/botao.css";

function botao(props) {
  return <button className="botao-laranja">{props.texto}</button>
}

export default botao;
