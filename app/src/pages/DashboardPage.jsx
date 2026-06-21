import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function DashboardPage() {
  const navigate = useNavigate()

  return (
    <main style={styles.container}>
      <h1 data-testid="dashboard-heading" style={styles.heading}>
        Welcome back!
      </h1>
      <p style={styles.subtitle}>You are now logged in.</p>
      <button
        data-testid="logout-button"
        style={styles.button}
        onClick={() => navigate('/')}
      >
        Logout
      </button>
    </main>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: 'sans-serif',
    gap: '0.5rem',
  },
  heading: {
    fontSize: '2rem',
    margin: 0,
  },
  subtitle: {
    color: '#555',
    margin: 0,
  },
  button: {
    marginTop: '1rem',
    padding: '0.6rem 1.5rem',
    fontSize: '1rem',
    backgroundColor: '#e53e3e',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
}
