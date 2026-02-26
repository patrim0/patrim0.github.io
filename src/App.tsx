import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';

export default function App() {

  return (
    <BrowserRouter>
      <div className="layout">
        <NavBar />

        <main className="content">
          <Routes>
            <Route path='/' element={<Home />}></Route>
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}