import React, {  useEffect } from "react";
import './App.css';


function App() {
    useEffect(() => {
        tg.ready();
      }, []);

  return (
    <div className="App">
      <h1>Бари истеп тур!!! Тамаша!</h1>
      <button onClick={onClose}>Жабу</button>
    </div>
  );
}

export default App;
