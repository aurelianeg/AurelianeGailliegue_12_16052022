import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'

// If mock is true, make sure to:
// - have installed json-server with '$ npm install -g json-server' in front-end terminal,
// - have launched '$ json-server --watch ./src/utils/mock/serverMock.json --port 8000' in front-end terminal.
// If mock is false, make sure to have launched '$ yarn dev' in back-end terminal on port 3001.
const mock = false

ReactDOM.render(<App mock={mock} />, document.getElementById('root'))
