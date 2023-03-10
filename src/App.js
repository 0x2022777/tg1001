import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from './components/Header/Header';
import './components/Header/Header.css';
import {Route, Routes} from 'react-router-dom';
import ProductList from './components/ProductList/ProductList';
import Form from './components/form/Form';
import Akparat from './components/Akparat/Akparat';



function App() {
  const {onToggleButton, tg} = useTelegram();

    useEffect(() => {
        tg.ready();
      }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<ProductList />}/>
        <Route path={'form'} element={<Form />}/> 
        <Route path={'akparat'} element={<Akparat />}/> 
      </Routes>
    </div>
  );
}

export default App;
