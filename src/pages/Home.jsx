import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

//components
import Searchbox from '/src/components/Searchbox';
import Card from '/src/components/Card';
import SkeletonCard from '/src/components/SkeletonCard';

function Home({ theme }) {
  const [countrys, setCountry] = useState([]);
  const [region, setRegion] = useState('');
  const [nameFilter, setNameFilter] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        if (region === '') {
          response = await fetch(
            `https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,cca3`
          );
        } else {
          response = await fetch(
            `https://restcountries.com/v3.1/${region}?fields=name,flags,population,region,capital,cca3`
          );
        }

        const json = await response.json();
        json.sort((a, b) => a.name.common.localeCompare(b.name.common));
        const sortedCountries = json.map(
          ({
            flags: { png: flagPng },
            name: { common: countryName },
            population,
            region,
            capital,
            cca3,
          }) => ({
            flagPng,
            countryName,
            population,
            region,
            capital,
            cca3,
          })
        );

        const filteredCountries = sortedCountries.filter((country) =>
          country.countryName.toLowerCase().startsWith(nameFilter)
        );
        setCountry(filteredCountries);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [region, nameFilter]);

  return (
    <>
      <main style={{ padding: '0 10px' }}>
        <Searchbox
          region={region}
          setRegion={setRegion}
          nameFilter={nameFilter}
          setNameFilter={setNameFilter}
        />
        <div
          className="main-container"
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            flexFlow: 'wrap',
            justifyContent: 'center',
            gap: '40px',
          }}
        >
          {!loading
            ? countrys.map((country, i) => {
                return (
                  <Link
                    key={i}
                    to={'/country/' + country.cca3}
                    style={{ textDecoration: 'none' }}
                  >
                    <Card key={i} {...country} theme={theme} />
                  </Link>
                );
              })
            : Array.from({ length: 12 }).map((_, index) => (
                <SkeletonCard key={index} />
              ))}
          {countrys.length === 0 && <h2>No countries in that region</h2>}
        </div>
      </main>
    </>
  );
}

export default Home;
