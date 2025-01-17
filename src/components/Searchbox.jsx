import { TextField } from '@mui/material';
import BasicSelect from './BasicSelect';
import './Searchbox.css';

const Searchbox = ({ region, setRegion, nameFilter, setNameFilter }) => {
  const hadleTextFieldChange = (event) => {
    setNameFilter(event.target.value.toLowerCase());
  };

  return (
    <div className="search-box-container">
      <TextField
        className="search-items"
        id="outlined-basic"
        label="Search for a county"
        variant="outlined"
        onChange={hadleTextFieldChange}
      />
      <BasicSelect
        className="search-items"
        region={region}
        setRegion={setRegion}
      />
    </div>
  );
};

export default Searchbox;
