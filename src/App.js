import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Todo from './Pages/Todo';
import CompletedTask from './Pages/CompletedTask';
import Calender from './Pages/Calender';
import Navigation from './Pages/Home/Navigation';
import Footer from './Pages/Footer';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/to-do' element={<Todo></Todo>}></Route>
        <Route path='/task-completed' element={<CompletedTask></CompletedTask>}></Route>
        <Route path='/calendar' element={<Calender></Calender>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
