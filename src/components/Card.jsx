import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './Card.css';

export default function ActionAreaCard({
  flagPng,
  countryName,
  population,
  region,
  capital,
}) {
  if (capital) {
    capital = capital.join(' ');
  }

  return (
    <Card
      className="card"
      style={{
        boxShadow: '0 5px 10px 5px rgba(0, 0, 0, 0.2)',
      }}
    >
      <CardActionArea>
        <CardMedia component="img" height="140" image={flagPng} alt="" />
        <CardContent>
          <h2>{countryName}</h2>
          <Typography variant="body1">
            <strong>Population:</strong>{' '}
            <span>
              {population.toLocaleString('en-US', {
                style: 'decimal',
                useGrouping: true,
              })}
            </span>
          </Typography>
          <Typography variant="body1">
            <strong>Region:</strong> <span>{region}</span>
          </Typography>
          <Typography variant="body1">
            <strong>Capital:</strong> <span>{capital || 'N/A'}</span>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
