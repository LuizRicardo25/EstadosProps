import React, { useState } from 'react';

function Contador(props) {
  // Inicializando o estado com o valor inicial recebido pelas props
  const [contador, setContador] = useState(props.valorInicial);

  // Função para incrementar o contador
  const incrementar = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <p>Valor do Contador: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}

export default Contador;
