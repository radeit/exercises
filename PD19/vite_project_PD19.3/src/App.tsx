import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationMenu from './NavigationMenu';

function App() {
  return (
    <nav>
      <Router>
        <div>
          <NavigationMenu />
          <Routes>
          <Route path="/" element={<h2>Pagrindinis puslapis</h2>} />
          <Route path="/about" element={<h2>Apie mus</h2>} />
          <Route path="/contacts" element={<h2>Kontaktai</h2>} />
          </Routes>
        </div>
      </Router>
    </nav>
  );
}

export default App;
