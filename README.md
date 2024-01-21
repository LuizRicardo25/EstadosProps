
# Exemplo de Estados e Props no React

Este exemplo demonstra o uso de estados (`state`) e propriedades (`props`) no React, utilizando um componente `Contador`.

## Componente App (Pai)

O componente `App` é o componente pai que passa um valor inicial para o componente `Contador`.

```jsx
import React from 'react';
import Contador from './Contador';

function App() {
  return (
    <div>
      <h1>Exemplo de Contador</h1>
      <Contador valorInicial={5} />
    </div>
  );
}

export default App;
Componente Contador (Filho)
O componente Contador utiliza tanto props quanto state. Ele recebe valorInicial como uma prop e usa o estado para manter e atualizar o valor do contador.

jsx
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
Detalhes do Exemplo
App (Componente Pai): Passa um valorInicial para o componente Contador. Neste exemplo, o valor 5 é passado como prop.
Contador (Componente Filho): Recebe valorInicial como uma prop e utiliza o useState para gerenciar o estado do contador. Quando o botão é clicado, a função incrementar é chamada, atualizando o estado e, consequentemente, re-renderizando o componente com o novo valor do contador.
Este exemplo ilustra um uso clássico de estados e props no React para criar componentes interativos e reutilizáveis.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

