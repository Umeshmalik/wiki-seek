
import './App.css';
import Welcome from './comp/Welcome';
import SearchBar from './comp/SearchBar';
import SearchResult from './comp/SearchResult';
import React, { useState }  from 'react';

export const searchInput = React.createContext(12);

function App() {
  const [input, setInput] = useState('');
  const [wikiName,setWikiName] = useState([]);
  const [wikiLinks, setWikiLinks] = useState([])
  return (
    <div className="App">
      <Welcome/>
      <searchInput.Provider value={[wikiName,wikiLinks, input,setWikiName, setWikiLinks, setInput]}>
        <SearchBar/>
        <SearchResult/>
      </searchInput.Provider>
    </div>
  );
}

export default App;
