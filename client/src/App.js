import './App.css';
import AddProduct from './components/add';
import DetailProduct from './components/detail';
import EditProduct from './components/edit';
import ListProduct from './components/list';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ListProduct />}></Route>
        <Route path="/detail/:id" element={<DetailProduct/>}></Route>
        <Route path="/add" element={<AddProduct/>}></Route>
        <Route path="/product/:id" element={<EditProduct/>}></Route>
      </Routes>
    </>
  );
}

export default App;
