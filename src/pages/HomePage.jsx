import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import axios from "axios";
import RegionSelect from "../components/RegionSelect";
import CountriesGrid from "../components/CountriesGrid";
import SearchBar from "../components/Searchbar";

const HomePage = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setCountries(response.data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name.common.toLowerCase().includes(search.toLowerCase());
    const matchesRegion = selectedRegion ? country.region === selectedRegion : true;
    return matchesSearch && matchesRegion;
  });

  return (
    <div>
      {/* Sökfält */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "24px",
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Search for a country..."
          sx={{
            width: "50%",
            backgroundColor: "#2B3844",
            borderRadius: 1,
          }}
          onChange={(e) => setSearch(e.target.value)}
        />
        <RegionSelect
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
        />
      </div>

      {/* Countries Grid */}
      <CountriesGrid countries={filteredCountries} />
    </div>
  );
};

export default HomePage;
