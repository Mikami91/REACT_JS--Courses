import PropTypes from 'prop-types';

export function App({ title, subtitle }) {
  return (
    <>
      <h1 data-testid='test-title'>{title}</h1>
      <h2 data-testid='test-subtitle'>{subtitle}</h2>
    </>
  );
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

App.defaultProps = {
  // title: 'Dark-.-Ness',
};
