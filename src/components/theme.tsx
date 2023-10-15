import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
      contrastText: '#665c4a',
    },
    background: {
      default: '#e6d3b8',
      paper: '#ffe6cc',
    },
    text: { primary: '#ff9800' },
  },
});

export default theme;