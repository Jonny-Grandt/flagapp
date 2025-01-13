function MainComponent() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [view, setView] = useState("home");

  useEffect(() => {
    fetchCountries();
  }, []);

  useEffect(() => {
    if (selectedRegion) {
      fetchCountriesByRegion(selectedRegion);
    } else {
      fetchCountries();
    }
  }, [selectedRegion]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  const fetchCountries = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.error("Fel vid hämtning av länder:", error);
    }
    setLoading(false);
  };
  const fetchCountriesByRegion = async (region) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/region/${region}`,
      );
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.error("Fel vid hämtning av länder efter region:", error);
    }
    setLoading(false);
  };
  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name.common
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <nav className={`p-4 ${darkMode ? "bg-gray-800" : "bg-white"} shadow-md`}>
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="font-roboto text-xl font-bold">The Flag App</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg"
          >
            <i className={`fas ${darkMode ? "fa-sun" : "fa-moon"}`}></i>
          </button>
        </div>
      </nav>

      {view === "home" ? (
        <div className="container mx-auto p-4">
          <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
            <input
              type="text"
              placeholder="Sök efter land..."
              className={`p-2 rounded-lg shadow-md ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className={`p-2 rounded-lg shadow-md ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <option value="">Alla regioner</option>
              <option value="Africa">Afrika</option>
              <option value="Americas">Amerika</option>
              <option value="Asia">Asien</option>
              <option value="Europe">Europa</option>
              <option value="Oceania">Oceanien</option>
            </select>
          </div>

          {loading ? (
            <div className="flex justify-center items-center">
              <i className="fas fa-spinner fa-spin text-4xl"></i>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredCountries.map((country) => (
                <div
                  key={country.cca3}
                  className={`rounded-lg shadow-md overflow-hidden cursor-pointer ${
                    darkMode ? "bg-gray-800" : "bg-white"
                  }`}
                  onClick={() => {
                    setSelectedCountry(country);
                    setView("country");
                  }}
                >
                  <img
                    src={country.flags.png}
                    alt={`Flagga för ${country.name.common}`}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="font-bold text-xl mb-2">
                      {country.name.common}
                    </h2>
                    <p>Population: {country.population.toLocaleString()}</p>
                    <p>Region: {country.region}</p>
                    <p>Huvudstad: {country.capital}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="container mx-auto p-4">
          <button
            onClick={() => setView("home")}
            className={`mb-8 px-4 py-2 ${
              darkMode ? "bg-gray-800" : "bg-white"
            } rounded-lg shadow-md`}
          >
            <i className="fas fa-arrow-left mr-2"></i>
            Tillbaka
          </button>

          <div
            className={`p-8 rounded-lg shadow-md ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <img
                src={selectedCountry.flags.png}
                alt={`Flagga för ${selectedCountry.name.common}`}
                className="w-full rounded-lg"
              />
              <div>
                <h1 className="text-3xl font-bold mb-4">
                  {selectedCountry.name.common}
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p>
                      <span className="font-bold">Befolkning:</span>{" "}
                      {selectedCountry.population.toLocaleString()}
                    </p>
                    <p>
                      <span className="font-bold">Region:</span>{" "}
                      {selectedCountry.region}
                    </p>
                    <p>
                      <span className="font-bold">Huvudstad:</span>{" "}
                      {selectedCountry.capital}
                    </p>
                  </div>
                  <div>
                    <p>
                      <span className="font-bold">Toppdomän:</span>{" "}
                      {selectedCountry.tld?.join(", ")}
                    </p>
                    <p>
                      <span className="font-bold">Valutor:</span>{" "}
                      {Object.values(selectedCountry.currencies || {})
                        .map((c) => c.name)
                        .join(", ")}
                    </p>
                    <p>
                      <span className="font-bold">Språk:</span>{" "}
                      {Object.values(selectedCountry.languages || {}).join(
                        ", ",
                      )}
                    </p>
                  </div>
                </div>

                {selectedCountry.borders && (
                  <div className="mt-8">
                    <h3 className="font-bold mb-2">Gränsar till:</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedCountry.borders.map((border) => {
                        const borderCountry = countries.find(
                          (c) => c.cca3 === border,
                        );
                        return (
                          <button
                            key={border}
                            onClick={() => setSelectedCountry(borderCountry)}
                            className={`px-4 py-2 ${
                              darkMode ? "bg-gray-700" : "bg-gray-200"
                            } rounded-lg`}
                          >
                            {borderCountry?.name.common}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      <style jsx global>{`
        :root {
          --bg-primary: #ffffff;
          --text-primary: #000000;
        }
        
        .dark-mode {
          --bg-primary: #1a202c;
          --text-primary: #ffffff;
        }
      `}</style>
    </div>
  );
}


