import { useLocation, useNavigate } from 'react-router-dom';
// Components
import { HeroResult } from '../components';
import { PageTitle } from '../../ui/components';
// Helpers
import { getHeroByName } from '../helpers';
// Hooks
import useForm from '../../hooks/useForm';

const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const query = location.search.slice(3) ?? '';

  const heroes = getHeroByName(query);

  const { searchText, onInputChange } = useForm({ searchText: query });

  const onSearch = (e) => {
    e.preventDefault();
    const cleanText = searchText.trim();
    if (cleanText.length <= 1) return;
    navigate(`?q=${cleanText.toLowerCase()}`);
  };

  return (
    <>
      <PageTitle title='Search Page' />

      <div className='container mt-4'>
        <div className='row'>
          <div className='col-xs-12 col-md-4'>
            <form className='mb-4' onSubmit={onSearch}>
              <div className='col-md-12'>
                <input
                  type='text'
                  placeholder='Search hero'
                  className='form-control mb-3'
                  autoComplete='off'
                  name='searchText'
                  value={searchText}
                  onChange={onInputChange}
                />
              </div>
              <div className='col-md-12'>
                <button
                  className='btn btn-outline-primary form-control mb-4'
                  type='button'
                  onClick={onSearch}
                >
                  Search
                </button>
              </div>
            </form>
          </div>

          <div className='col-xs-12 col-md-8'>
            {query != '' && (
              <>
                {heroes.length > 0 ? (
                  <div className='alert alert-success text-center animate__animated animate__zoomIn animate__faster'>
                    Results
                  </div>
                ) : (
                  <div className='alert alert-danger text-center animate__animated animate__zoomIn animate__faster'>
                    Hero <b>{query}</b> no found
                  </div>
                )}
                {heroes.map((i) => (
                  <HeroResult key={i.id} {...i} />
                ))}
                <br />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
