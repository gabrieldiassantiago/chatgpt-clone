import React from "react";

export default function Translation({ doStuff, setInput, result }) {
  return (
    <div>
      <h1>Coloque sua pergunta aqui</h1>
      <textarea
        className="text-area"
        cols={55}
        rows={10}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <button className="action-btn" onClick={doStuff}>
       Enviar
      </button>

      <h3 className="result-text">{result.length > 0 ? result : ""}</h3>
    </div>
  );
}
