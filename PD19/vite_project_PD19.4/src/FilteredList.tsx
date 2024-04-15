import React, { useState } from 'react';

function FilteredList() {
  const items = [
    'Obuolys',
    'Bananas',
    'Datule',
    'Vynuoge',
    'Melionas',
    'Apelsinas',
    'Mandarinas',
    'Arbuzas'
];

const [searchTerm, setSearchTerm] = useState('');

const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setSearchTerm(event.target.value);
};

const filteredItems = items.filter(item =>
  item.toLowerCase().includes(searchTerm.toLowerCase())
);

return (
  <div>
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={handleSearchChange}
    />
    <ul>
      {filteredItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);
}

export default FilteredList;