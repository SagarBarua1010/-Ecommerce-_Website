import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from './App.jsx'
import './index.css'
import ShopContextProvider from './Context/ShopContext'

 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
  <ShopContextProvider>
    <App />
  </ShopContextProvider>
)
