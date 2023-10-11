import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'
import NavBar from './components/NavBar/NavBar';
import BottomBar from './components/BottomBar/BottomBar';
import FeaturesPage from './pages/FeaturesPage/FeaturesPage';
import DocsPage from './pages/DocsPage/DocsPage';
import DescriptionPage from './pages/DescriptionPage/DescriptionPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
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
