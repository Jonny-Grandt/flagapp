import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function IconLabelButtons({ startIcon, text, theme, setTheme }) {
  const handleOnClick = () => {
    if (theme == 'dark') {
      setTheme('light');
      document.body.classList.add('ligth-theme');
    } else {
      setTheme('dark');
      document.body.classList.remove('ligth-theme');
    }
  };

  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent="center"
      alignItems="center"
    >
      <Button
        className="theme-button"
        variant="text"
        startIcon={startIcon}
        sx={{ fontWeight: 300, fontSize: '16px' }}
        onClick={handleOnClick}
      >
        {text}
      </Button>
    </Stack>
  );
}
