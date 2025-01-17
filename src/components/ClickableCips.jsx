import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import './ClickableChips.css';

export default function ClickableChips({ chip }) {
  return (
    <Stack direction="row" spacing={1}>
      <Link to={'/country/' + chip}>
        <Chip className="chip" label={chip} />
      </Link>
    </Stack>
  );
}
