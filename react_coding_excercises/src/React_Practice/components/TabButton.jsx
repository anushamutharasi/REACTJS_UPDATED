import React from 'react'

const TabButton = ({ children, onSelect }) => {
  return (
    <li style={{ listStyleType: "none" }}>
      <button
      onClick={onSelect}
        style={{
          backgroundColor: "violet",
          padding: "10px 10px",
          borderRadius: "20px",
        }}
      >
        {children}
      </button>
    </li>
  );
};

export default TabButton

