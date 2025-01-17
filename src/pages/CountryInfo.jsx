import { Link, useParams } from 'react-router-dom';
import IconLabelButtons from '/src/components/IconLabelButtons';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ClickableChips from '../components/ClickableCips';
import './CountryInfo.css';
import { useEffect, useState } from 'react';
import SkeletonInfo from '../components/SkeletonInfo';

const CountryInfo = () => {
  const { id } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/alpha/${id}`
        );
        const data = await response.json();
        setCountry(data[0]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCountry();
  }, [id]);

  if (loading) return <SkeletonInfo />;
  if (error) return <div>Error: {error.message}</div>;
  if (!country) return <div>No country data found</div>;

  let nativeName = 'N/A';
  if (country.name.nativeName) {
    nativeName = Object.values(country.name.nativeName)[0].common;
  }
  let currencies = 'N/A';
  if (country.currencies) {
    currencies = Object.values(country.currencies)[0].name;
  }
  const languages = country.languages
    ? Object.values(country.languages).join(', ')
    : 'N/A';
  const chipArray = country.borders ? country.borders : 'N/A';

  return (
    <div className="main-container">
      <Link style={{ textDecoration: 'none' }} to={'/'}>
        <IconLabelButtons startIcon={<ArrowBackIcon />} text="back" />
      </Link>
      <div className="country">
        <div className="flag-container">
          <img
            className="flag-img"
            src={country.flags.png}
            alt={`flag of ${country.name.common}`}
          />
        </div>
        <div className="info-container">
          <h1>{country.name.common}</h1>
          <div className="info">
            <div className="sub-container">
              <div className="info-text-container">
                <strong>Population: </strong>
                {country.population.toLocaleString('en-US', {
                  style: 'decimal',
                  useGrouping: true,
                })}
              </div>
              <div className="info-text-container">
                <strong>Region: </strong>
                {country.region}
              </div>
              <div className="info-text-container">
                <strong>Capital: </strong>
                {country.capital ? country.capital.join(', ') : 'N/A'}
              </div>
              <div className="info-text-container">
                <strong>Nativ name: </strong>
                {nativeName}
              </div>
            </div>
            <div className="sub-container">
              <div className="info-text-container">
                <strong>Top Level Domain: </strong>
                {country.tld ? country.tld.join(' ') : 'N/A'}
              </div>
              <div className="info-text-container">
                <strong>Currencies: </strong>
                {currencies}
              </div>
              <div className="info-text-container">
                <strong>Language: </strong>
                {languages}
              </div>
            </div>
          </div>
          <div className="border-countries">
            <strong>Border Countries: </strong>
            <div className="border-countries-container">
              {chipArray !== 'N/A'
                ? chipArray.map((chip, i) => {
                    return <ClickableChips chip={chip} key={i} />;
                  })
                : 'N/A'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryInfo;
