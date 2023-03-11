import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AboutPage, ContactPage, PortfolioPage, ResumePage } from './pages'
import { HashRouter, Navigate, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <HashRouter>
      <Routes>
        <Route path='/about' element={<><AboutPage /></>} />
        <Route path='/portfolio' element={<><PortfolioPage /></>} />
        <Route path='/resume' element={<><ResumePage /></>} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/about" replace />} />
      </Routes>
    </HashRouter>
    </div>
  );
}

export default App;
