import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AboutPage, ContactPage, PortfolioPage, ResumePage } from './pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AboutPage />} />
        <Route path='/about' element={<><AboutPage /></>} />
        <Route path='/portfolio' element={<><PortfolioPage /></>} />
        <Route path='/resume' element={<><ResumePage /></>} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
