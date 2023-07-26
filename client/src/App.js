import './App.css';
import AddTour from './components/add';
import DetailTour from './components/detail';
import EditTour from './components/edit';
import ListTour from './components/list';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ListTour />}></Route>
        <Route path="/detail/:id" element={<DetailTour />}></Route>
        <Route path="/add" element={<AddTour/>}></Route>
        <Route path="/tour/:id" element={<EditTour />}></Route>
      </Routes>
    </>
  );
}

export default App;
