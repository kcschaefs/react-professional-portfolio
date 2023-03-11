import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AboutPage, ContactPage, PortfolioPage, ResumePage } from './pages'
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/about' element={<><AboutPage /></>} />
        <Route path='/portfolio' element={<><PortfolioPage /></>} />
        <Route path='/resume' element={<><ResumePage /></>} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/about" replace />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
