import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
// Hooks
import { useScreen } from '../hooks';

const TogglerLink = ({ text, to, target }) => {
  const { isMobile } = useScreen();

  return (
    <NavLink className='nav-item nav-link' to={to}>
      <div
        className={`${isMobile ? 'd-flex' : ''}`}
        data-bs-toggle={`${isMobile ? 'collapse' : ''}`}
        data-bs-target={`${isMobile ? `#${target}` : ''}`}
      >
        {text}
      </div>
    </NavLink>
  );
};

TogglerLink.propTypes = {
  text: PropTypes.string,
  to: PropTypes.string,
  target: PropTypes.string,
};

TogglerLink.defaultProps = {
  text: 'link',
  to: '',
  target: 'navbarNav',
};

export default TogglerLink;
