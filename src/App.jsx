import { useState } from 'react';
// Components
import { InputSearch, Header } from './components';
// Styles
import './App.css';
import GifGrid from './components/GifGrid';

const App = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (category) => {
    if (categories.some((i) => i.toLowerCase() === category.toLowerCase())) {
      return alert(`Category ${category} already exist`);
    }

    setCategories([category, ...categories]);
  };

  return (
    <>
      <div
        className='sticky-top'
        style={{
          backgroundColor: '#242424',
          paddingTop: 20,
          paddingBottom: 20,
        }}
      >
        <Header />
        <br />

        <InputSearch onAddCategory={onAddCategory} />
      </div>
      <blockquote className='blockquote text-center'>
        {categories.map((i) => (
          <GifGrid key={i} category={i} />
        ))}
      </blockquote>
    </>
  );
};

export default App;
