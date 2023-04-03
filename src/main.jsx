import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { AuthContextProvider } from './context/AuthContext'
import { ColContextProvider } from './context/ColContext'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <ColContextProvider>
        <App />
      </ColContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
