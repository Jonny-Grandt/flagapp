import { Outlet } from 'react-router-dom';
import Navbar from '/src/components/Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from 'react';

const Rootlayout = () => {
  const [theme, setTheme] = useState('dark');

  const colorTheme =
    theme == 'dark'
      ? createTheme({
          palette: {
            mode: 'dark',
          },
        })
      : createTheme({
          palette: {
            mode: 'light',
          },
        });

  return (
    <ThemeProvider theme={colorTheme}>
      <div>
        <Navbar theme={theme} setTheme={setTheme} />
        <main>
          <Outlet />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Rootlayout;
