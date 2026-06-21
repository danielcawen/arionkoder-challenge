import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function LandingPage() {
  const navigate = useNavigate()

  return (
    <main style={styles.container}>
      <h1 data-testid="landing-heading" style={styles.heading}>
        Welcome to Arionkoder
      </h1>
      <p style={styles.subtitle}>A simple app built for the challenge.</p>
      <button
        data-testid="get-started-button"
        style={styles.button}
        onClick={() => navigate('/login')}
      >
        Get Started
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
    gap: '1rem',
  },
  heading: {
    fontSize: '2.5rem',
    margin: 0,
  },
  subtitle: {
    fontSize: '1.1rem',
    color: '#555',
    margin: 0,
  },
  button: {
    padding: '0.75rem 2rem',
    fontSize: '1rem',
    backgroundColor: '#0070f3',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
}
