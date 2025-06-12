function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)',
        fontFamily: 'Inter, Arial, sans-serif',
      }}
    >
      <h1
        style={{
          fontSize: '2.5rem',
          fontWeight: 700,
          color: '#3730a3',
          marginBottom: '1rem',
          letterSpacing: '-1px',
          textShadow: '0 2px 8px #e0e7ff',
        }}
      >
        Welcome to the Bunji Front End Technical Test
      </h1>
      <p
        style={{
          fontSize: '1.25rem',
          color: '#334155',
          background: '#fff',
          padding: '1rem 2rem',
          borderRadius: '12px',
          boxShadow: '0 2px 16px rgba(55,48,163,0.08)',
        }}
      >
        This is the REACT + Vite + boilerplate starter app
      </p>
    </div>
  );
}

export default App;
