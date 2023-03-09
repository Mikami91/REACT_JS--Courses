import PropTypes from 'prop-types';

const TogglerButton = ({ target }) => {
  return (
    <div
      className='navbar-toggler'
      data-bs-toggle='collapse'
      data-bs-target={`#${target}`}
    >
      <span className='navbar-toggler-icon'></span>
    </div>
  );
};

TogglerButton.propTypes = {
  target: PropTypes.string,
};

TogglerButton.defaultProps = {
  target: 'navbarNav',
};

export default TogglerButton;
