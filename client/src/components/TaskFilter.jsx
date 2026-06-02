import React from 'react';

export default function TaskFilter({ currentFilter, onFilterChange }) {
  return (
    <div style={styles.filterBar}>
      {['All', 'Active', 'Completed'].map((tab) => (
        <button
          key={tab}
          onClick={() => onFilterChange(tab)}
          style={{
            ...styles.filterTab,
            borderBottom: currentFilter === tab ? '3px solid #007bff' : 'none',
            color: currentFilter === tab ? '#007bff' : '#666',
          }}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

const styles = {
  filterBar: { display: 'flex', gap: '20px', borderBottom: '1px solid #ddd', marginBottom: '20px' },
  filterTab: { background: 'none', border: 'none', padding: '10px 5px', fontSize: '16px', cursor: 'pointer', fontWeight: 'bold' }
};