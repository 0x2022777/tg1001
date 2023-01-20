import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from './components/Header/Header';



function App() {
  const {onToggleButton, tg} = useTelegram();

    useEffect(() => {
        tg.ready();
      }, []);

  return (
    <div className="App">
      <Header />
      <h1>Бари истеп тур!!! Тамаша!</h1>
      <button onClick={onToggleButton}>Toggle</button>
    </div>
  );
}

export default App;
