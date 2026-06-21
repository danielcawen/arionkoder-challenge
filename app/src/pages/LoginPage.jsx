import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const VALID_EMAIL = 'user@example.com'
const VALID_PASSWORD = 'password123'

export default function LoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      navigate('/dashboard')
    } else {
      setError('Invalid credentials')
    }
  }

  return (
    <main style={styles.container}>
      <h1 style={styles.heading}>Sign in</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          data-testid="email-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <input
          data-testid="password-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        {error && (
          <p data-testid="error-message" style={styles.error}>
            {error}
          </p>
        )}
        <button data-testid="submit-button" type="submit" style={styles.button}>
          Login
        </button>
      </form>
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
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '1.5rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    width: '320px',
  },
  input: {
    padding: '0.6rem 0.8rem',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    padding: '0.65rem',
    fontSize: '1rem',
    backgroundColor: '#0070f3',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  error: {
    color: '#c00',
    margin: 0,
    fontSize: '0.9rem',
  },
}
