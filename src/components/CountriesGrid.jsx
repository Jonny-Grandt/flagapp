import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Link } from "react-router-dom";

const CountriesGrid = ({ countries }) => {
  return (
    <Grid container spacing={6}>
      {countries.map((country) => (
        <Grid item xs={12} sm={6} md={4} key={country.cca2}>
          <Link to={`/country/${country.name.common}`} style={{ textDecoration: "none" }}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "background.paper",
                color: "text.primary",
              }}
            >
              <CardMedia
                component="img"
                image={country.flags.png}
                alt={country.name.common}
                sx={{
                  height: 160,
                  objectFit: "cover",
                }}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {country.name.common}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Population: {country.population.toLocaleString()}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Region: {country.region}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Capital: {country.capital}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default CountriesGrid;
