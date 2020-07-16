import React from 'react';
import Card from './components/Card/Card';
import characters from './characters.json';
// import './App.css';

function App() {
  return (
    <>
    {characters.map(character =>(
    <Card
      key={character.id}
      name={character.name}
      image={character.image}
      house={character.house}
      nickname={character.nickname}
      />
    ))}
    </>
  );
}

export default App;
