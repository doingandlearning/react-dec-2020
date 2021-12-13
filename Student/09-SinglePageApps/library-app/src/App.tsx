import React from 'react';
import DataProvider from './DataProvider'
import Menu from './Menu';

function App() {
  
  const books = DataProvider.getAllBooks()
	const films = DataProvider.getAllFilms()

  return (
    <div>
      <Menu/>
      <div>Define route table here!</div>
    </div>
  );
}
export default App;
