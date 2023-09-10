// import React from 'react';
// import ReactDOM from 'react-dom';

// import App from './App';
// import './index.css';

// ReactDOM.render(<App />, document.getElementById('root'));

import React, {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import 'react-tooltip/dist/react-tooltip.css'

import App from './App';
import './index.css';

// 👇️ IMPORTANT: use correct ID of your root element
// this is the ID of the div in your index.html file
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// 👇️ if you use TypeScript, add non-null (!) assertion operator
// const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);