import './styles/fonts';
import './styles/index.css';
import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { App } from './App';

const root = document.getElementById('root')!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// Im Build ist das HTML vorgerendert → nur hydrieren. Im Dev-Server neu rendern.
if (root.firstElementChild) hydrateRoot(root, app);
else createRoot(root).render(app);
