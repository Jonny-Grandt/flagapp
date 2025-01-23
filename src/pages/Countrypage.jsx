import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CountryPage = () => {
  const { id } = useParams();
  const [country, setCountry] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await axios.get(`https://restcountries.com/v3.1/name/${id}`);
        setCountry(response.data[0]);
      } catch (err) {
        setError("Country not found.");
      }
    };

    fetchCountry();
  }, [id]);

  if (error) {
    return <div style={{ color: "white", padding: "20px" }}>{error}</div>;
  }

  if (!country) {
    return <div style={{ color: "white", padding: "20px" }}>Loading...</div>;
  }

  return (
    <div
      style={{
        padding: "80px 20px 20px", // Fixar avstånd från navbaren
        color: "text.primary",
        backgroundColor: "background.default",
        minHeight: "100vh",
      }}
    >
      <h1>{country.name.common}</h1>
      <img
        src={country.flags.png}
        alt={`${country.name.common} flag`}
        style={{ width: "200px" }}
      />
      <p>
        <strong>Population:</strong> {country.population.toLocaleString()}
      </p>
      <p>
        <strong>Region:</strong> {country.region}
      </p>
      <p>
        <strong>Capital:</strong> {country.capital}
      </p>
    </div>
  );
};

export default CountryPage;
