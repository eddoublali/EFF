import React from 'react';
import expertsData from './data'; // Importing the data
import Expert from './Expert';    // Importing the Expert component

function Experts1() {
  return (
    <div className="container">
      <ul className="list-unstyled">
        {expertsData.map((expert) => (
          <Expert key={expert.id} expert={expert} />
        ))}
      </ul>
    </div>
  );
}

export default Experts1;
