import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'
import { Provider } from 'react-redux';
import store from './lib/redux/store';
import {
  BrowserRouter as Router
  , Routes, Route
} from 'react-router-dom';
import LandingPage from './components/global/landing-page.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/app" element={<App />} />
        </Routes>
      </Router>
    </Provider>
  </StrictMode>,
)
