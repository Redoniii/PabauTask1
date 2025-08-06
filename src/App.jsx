import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BrandPage from './pages/BrandPage';
import ModelPage from './pages/ModelPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brand/:id" element={<BrandPage />} />
        <Route path="/brand/:brandId/model/:modelId" element={<ModelPage />} />
      </Routes>
    </Router>
  );
}
