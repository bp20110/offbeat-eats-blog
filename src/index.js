import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import theme from './components/theme';
import { ThemeProvider } from '@mui/material/styles';
import Footer from "./components/Footer";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
    <ThemeProvider theme={theme}>
        <div style={{ 
            paddingTop: '15px',
            background: theme.palette.background.default,
            minHeight: '100vh',
            position: 'relative',
        }}>
            <div style={{
                paddingRight: '30px',
                paddingLeft: '30px',
                position: 'relative',
            }}>
                <App />
            </div>
            <Footer />
        </div>
    </ThemeProvider>
);