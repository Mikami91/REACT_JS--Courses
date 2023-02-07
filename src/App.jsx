import { useState } from 'react';
// Components
import { InputSearch, Header } from './components/index.js';
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
    <div className='App'>
      <Header />
      <InputSearch onAddCategory={onAddCategory} />
      <div className='card'>
        {categories.map((i) => (
          <GifGrid key={i} category={i} />
        ))}
      </div>
    </div>
  );
};

export default App;
