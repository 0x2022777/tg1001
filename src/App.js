import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./components/hooks/useTelegram";
import Header from './components/Header/Header';
import './components/Header/Header.css';
import {Route, Routes} from 'react-router-dom';


function App() {
  const {onToggleButton, tg} = useTelegram();

    useEffect(() => {
        tg.ready();
      }, []);

  return (
    <div className="App">
      <Header />
      <h1>Бари истеп тур!!! Тамаша!</h1>
      
    </div>
  );
}

export default App;
