import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';


function App() {

  return (
    <BrowserRouter>
      <div className="layout">
        <NavBar />

        <main className="content m-5">
          <Routes>
            <Route path='/' element={<Home />}></Route>
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App
