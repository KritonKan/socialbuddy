import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '4rem' }}>
      <h1>🚘 SocialBuddy</h1>
      <p>Η κοινωνική πλατφόρμα για λάτρεις των οχημάτων! 🔧🏍️🚗</p>

      <div style={{ marginTop: '2rem' }}>
        <Link href="/signup">
          <button style={{
            padding: '0.5rem 1rem',
            marginRight: '1rem',
            background: '#1d4ed8',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}>
            Sign Up
          </button>
        </Link>
        <Link href="/login">
          <button style={{
            padding: '0.5rem 1rem',
            background: '#6b7280',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}>
            Log In
          </button>
        </Link>
      </div>
    </div>
  );
}
