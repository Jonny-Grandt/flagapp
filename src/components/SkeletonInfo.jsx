import { Skeleton } from '@mui/material';
import { Link } from 'react-router-dom';
import IconLabelButtons from '/src/components/IconLabelButtons';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Chip from '@mui/material/Chip';

export default function SkeletonInfo() {
  return (
    <div className="main-container">
      <Link style={{ textDecoration: 'none' }} to={'/'}>
        <IconLabelButtons startIcon={<ArrowBackIcon />} text="back" />
      </Link>
      <div className="country">
        <div className="flag-container">
          <Skeleton
            variant="rectangular"
            width={545}
            height={363}
            sx={{
              borderRadius: '10px',
              boxShadow: '0 5px 10px 5px rgba(0, 0, 0, 0.2)',
            }}
          />
        </div>
        <div className="info-container">
          <h1>
            <Skeleton variant="text" width={200} sx={{ fontSize: '3rem' }} />
          </h1>
          <div className="info">
            <div className="sub-container">
              <div className="info-text-container">
                <strong>Population: </strong>
                <Skeleton
                  variant="text"
                  width={60}
                  sx={{ fontSize: '1rem', display: 'inline-block' }}
                />
              </div>
              <div className="info-text-container">
                <strong>Region: </strong>
                <Skeleton
                  variant="text"
                  width={60}
                  sx={{ fontSize: '1rem', display: 'inline-block' }}
                />
              </div>
              <div className="info-text-container">
                <strong>Capital: </strong>
                <Skeleton
                  variant="text"
                  width={60}
                  sx={{ fontSize: '1rem', display: 'inline-block' }}
                />
              </div>
              <div className="info-text-container">
                <strong>Nativ name: </strong>
                <Skeleton
                  variant="text"
                  width={60}
                  sx={{ fontSize: '1rem', display: 'inline-block' }}
                />
              </div>
            </div>
            <div className="sub-container">
              <div className="info-text-container">
                <strong>Top Level Domain: </strong>
                <Skeleton
                  variant="text"
                  width={25}
                  sx={{ fontSize: '1rem', display: 'inline-block' }}
                />
              </div>
              <div className="info-text-container">
                <strong>Currencies: </strong>
                <Skeleton
                  variant="text"
                  width={60}
                  sx={{ fontSize: '1rem', display: 'inline-block' }}
                />
              </div>
              <div className="info-text-container">
                <strong>Language: </strong>
                <Skeleton
                  variant="text"
                  width={60}
                  sx={{ fontSize: '1rem', display: 'inline-block' }}
                />
              </div>
            </div>
          </div>
          <div className="border-countries">
            <strong>Border Countries: </strong>
            <div className="border-countries-container">
              <Chip label={'   '} sx={{ width: '50px' }} />
              <Chip label={'   '} sx={{ width: '50px' }} />
              <Chip label={'   '} sx={{ width: '50px' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
