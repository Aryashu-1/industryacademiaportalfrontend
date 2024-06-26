import React, { useState, useEffect, useRef } from 'react';
import Filter from '../Filter/Filter';


const SearchBar = (props) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const suggestionsRef = useRef(null);
  const list = props.data || [];
  const [searchItems, setSearchItems] = useState([]);

  useEffect(() => {
    setSearchItems(list.map((item) => ({
      name: item.courseName || item.name ||item.title,
      expert: item.expert || item.founder.name|| item.authors,
    })));
  }, [list]);
  console.log(searchItems)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target)) {
        setSuggestions([]);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
    const filteredItems = searchItems.filter((item) =>
      item.name.toLowerCase().startsWith(value.toLowerCase())
    );
    setSuggestions(value.trim() !== '' ? filteredItems : []);
  };

  const handleSearch = () => {
    console.log('Search Query:', searchQuery);
    const searchObject = { query: searchQuery };
    console.log('Search Object:', searchObject);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="justify-center box-content mb-5 h-[50px] w-[80vw] md:w-[500px] mt-[15px] md:mt-0 py-1 ml-[30px]">
        <div className="flex justify-center w-[80vm] md:w-[500px] relative">
          <div className="flex items-center rounded-[30px] mt-1 shadow-3xl h-[45px] w-[546px] p-2 border-gray-300 border-[0.5px]">
            <input
              type="text"
              placeholder="Search for Courses, Experts..."
              value={searchQuery}
              onChange={handleChange}
              className="w-full py-3 h-[25px] pl-[20px] focus:outline-none"
              style={{ outline: 'none' }}
            />
            <button
              className="flex items-center justify-center text-white rounded-full ml-2"
              onClick={handleSearch}
            >
              <img
                className="h-[20px] drop-shadow-3xl"
                src="https://cdn-icons-png.freepik.com/256/711/711319.png?semt=ais_hybrid"
                alt=""
              />
            </button>
          </div>
          {suggestions.length > 0 && (
            <ul ref={suggestionsRef} className="absolute z-10 top-[51px] left-[10px] w-[412px] bg-white border-gray-300 rounded-b-lg shadow-lg">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => {
                    setSearchQuery(suggestion.name);
                    setSuggestions([]);
                  }}
                >
                  <div>
                    <strong>{suggestion.name}</strong><br />
                    <small>{suggestion.expert}</small>
                  </div>
                </li>
              ))}
            </ul>
          )}

        </div>
      </div>
    </div>
  );
};

export default SearchBar;