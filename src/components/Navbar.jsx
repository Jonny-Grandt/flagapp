import IconLabelButtons from './IconLabelButtons';
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import techoverLogo from '../assets/techover-logo.png';
import techoverLogoDark from '../assets/techover-logo-dark.png';
import './Navbar.css';

const Header = ({ theme, setTheme }) => {
  const logoSrc = theme === 'dark' ? techoverLogo : techoverLogoDark;
  const buttontext = theme === 'dark' ? 'DARK MODE' : 'LIGHT MODE';

  return (
    <header>
      <div className="header-container">
        <h2 className="app-name">The Flag App</h2>
        <img src={logoSrc} alt="techover-logo" className="techover-logo" />
        <IconLabelButtons
          startIcon={<BrightnessHighIcon />}
          text={buttontext}
          theme={theme}
          setTheme={setTheme}
        />
      </div>
    </header>
  );
};

export default Header;
