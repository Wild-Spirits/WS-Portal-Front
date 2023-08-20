import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'
import NavBar from './components/NavBar/NavBar';
import BottomBar from './components/BottomBar/BottomBar';
import FeaturesPage from './pages/FeaturesPage/FeaturesPage';
import DocsPage from './pages/DocsPage/DocsPage';
import DescriptionPage from './pages/DescriptionPage/DescriptionPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/docs" element={<DocsPage />} />
          <Route path="/dscr" element={<DescriptionPage />} />
        </Routes>
        <BottomBar />
      </div>
    </BrowserRouter>
  );
}

export default App;
