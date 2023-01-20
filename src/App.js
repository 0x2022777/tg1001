import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./components/hooks/useTelegram";
import Header from './components/Header/Header';
import './components/Header/Header.css';
import {Form, Route, Routes} from 'react-router-dom';
import ProductList from './components/ProductList/ProductList';
import Form from "./componentes/form/Form";


function App() {
  const {onToggleButton, tg} = useTelegram();

    useEffect(() => {
        tg.ready();
      }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<ProductList />} />
        <Route path={'form'} element={<Form />} /> 
      </Routes>
      <h1>Бари истеп тур!!! Тамаша!</h1>
      
    </div>
  );
}

export default App;
