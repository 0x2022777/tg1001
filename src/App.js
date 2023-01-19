import React, {  useEffect } from "react";
import './App.css';
const tg = window.Telegram.WebApp;

function App() {
    useEffect(() => {
        tg.ready();
      }, []);
    const onClose = () => {
      tg.close();
    }
  return (
    <div className="App">
      <h1>Бари истеп тур!!! Тамаша!</h1>
      <button onClick={onClose}>Жабу</button>
    </div>
  );
}

export default App;
