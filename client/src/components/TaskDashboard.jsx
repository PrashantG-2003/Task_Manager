import React from 'react';

export default function TaskDashboard({ total, active, completed }) {
  return (
    <div style={styles.dashboard}>
      <div style={{ ...styles.card, borderTop: '4px solid #6c757d' }}>
        <h3 style={styles.cardTitle}>Total Tasks</h3>
        <p style={styles.cardCount}>{total}</p>
      </div>
      <div style={{ ...styles.card, borderTop: '4px solid #007bff' }}>
        <h3 style={styles.cardTitle}>Active</h3>
        <p style={{ ...styles.cardCount, color: '#007bff' }}>{active}</p>
      </div>
      <div style={{ ...styles.card, borderTop: '4px solid #28a745' }}>
        <h3 style={styles.cardTitle}>Completed</h3>
        <p style={{ ...styles.cardCount, color: '#28a745' }}>{completed}</p>
      </div>
    </div>
  );
}

const styles = {
  dashboard: { display: 'flex', gap: '16px', marginBottom: '32px' },
  card: { 
    flex: 1, 
    padding: '18px 12px', 
    background: '#ffffff', 
    borderRadius: '12px', 
    textAlign: 'center', 
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
    transition: 'transform 0.2s ease'
  },
  cardTitle: { margin: '0 0 8px 0', fontSize: '13px', color: '#6c757d', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: '600' },
  cardCount: { margin: '0', fontSize: '28px', fontWeight: '700', color: '#212529' }
};