import React, {  useEffect } from "react";
import './App.css';


function App() {
  const {onToggleButton, tg} = useTelegram();

    useEffect(() => {
        tg.ready();
      }, []);

  return (
    <div className="App">
      <h1>Бари истеп тур!!! Тамаша!</h1>
      <button onClick={onToggleButton}>Toggle</button>
    </div>
  );
}

export default App;
