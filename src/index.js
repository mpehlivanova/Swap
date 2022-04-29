import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import {
//   Mainnet,
//   DAppProvider,
//   Config,
// } from '@usedapp/core'
// import { getDefaultProvider } from 'ethers'


const root = ReactDOM.createRoot(document.getElementById('root'));

// const config: Config = {
//   readOnlyChainId: Mainnet.chainId,
//   readOnlyUrls: {
//     [Mainnet.chainId]: getDefaultProvider('mainnet'),
//   },
// }
root.render(
  <React.StrictMode>
    {/* <DAppProvider config={config} > */}
    <App />
    {/* </DAppProvider> */}
   
  </React.StrictMode>
);

