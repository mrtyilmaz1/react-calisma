import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')). // index.html'de tanımlanan root yakalanır.
render( // yakalayınca render et. App kompanentini render eder. App.jsx'de return içindeki değeri dönderir.
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
)
