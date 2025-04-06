import React, { useState } from 'react';
import PoemCard from './components/PoemCard';
import PoemForm from './components/PoemForm';
import './App.css';

const App = () => {
  const [poems, setPoems] = useState([]);
  const [editingPoem, setEditingPoem] = useState(null);

  const addPoem = (poem) => {
    setPoems([...poems, { ...poem, id: Date.now() }]);
  };

  const updatePoem = (updatedPoem) => {
    setPoems(poems.map((poem) => (poem.id === updatedPoem.id ? updatedPoem : poem)));
    setEditingPoem(null);
  };

  const deletePoem = (id) => {
    setPoems(poems.filter((poem) => poem.id !== id));
  };

  const editPoem = (poem) => {
    setEditingPoem(poem);
  };

  return (
    <div className="App">
      <h1>Poema App</h1>
      <PoemForm
        onSubmit={editingPoem ? updatePoem : addPoem}
        initialPoem={editingPoem}
      />
      <div className="poem-list">
        {poems.map((poem) => (
          <PoemCard
            key={poem.id}
            poem={poem}
            onDelete={deletePoem}
            onEdit={editPoem}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
