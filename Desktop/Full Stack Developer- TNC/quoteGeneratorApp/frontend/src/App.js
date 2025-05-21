import React, { useState } from 'react';

function App() {
  const [quote, setQuote] = useState('');

  const getQuote = () => {
    fetch('http://localhost:3001/quote')
      .then(res => res.json())
      .then(data => setQuote(data.quote))
      .catch(err => console.error('Error fetching quote:', err));
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Click the button to get a quote!</h1>
      <button onClick={getQuote}>Get Quote</button>
      <p>{quote}</p>
    </div>
  );
}

export default App;
