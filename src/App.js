import Header from './Header/Header';
import AboutAxpo from './Pages/AboutAxpo';
import Home from './Pages/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/AboutAxpo" element={<AboutAxpo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
