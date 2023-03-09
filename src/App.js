import './assets/css/App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { About, Footer, Header, Portfolio, WorkCard } from './components'

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Portfolio />
      <Footer />

      
    </div>
  );
}

export default App;
