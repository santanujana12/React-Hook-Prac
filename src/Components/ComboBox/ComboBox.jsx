import React, { useState, useEffect, useRef } from 'react';

const Combobox = () => {
  const options = [
    'Apple',
    'Banana',
    'Cherry',
    'Date',
    'Elderberry',
    'Fig',
    'Grape',
    'Honeydew',
    '9',
    '8',
  ];

  const [inputValue, setInputValue] = useState('');
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [showOptions, setShowOptions] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        console.log(event.target);
        setShowOptions(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    const filtered = options.filter((option) =>
      option.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(filtered);
    setShowOptions(true);
  };

  const handleOptionClick = (option) => {
    setInputValue(option);
    setShowOptions(false);
  };

  return (
    <div className="relative w-64" ref={inputRef}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="w-full p-2 border rounded"
        placeholder="Select an option..."
      />
      {showOptions && (
        <div
          id="combobox-list"
          className="absolute w-full bg-white border rounded mt-1 h-8 overflow-scroll"
        >
          {filteredOptions.map((option, index) => (
            <div
              key={index}
              className="p-2 cursor-pointer"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Combobox;
