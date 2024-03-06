import './App.css';
import Header from './components/header';
import Home from './components/home';
import Register from './components/register';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/register' element={ <Register />} />
      </Routes>
     
    </>
  );
}

export default App;