import { useState } from 'react';
import QRCode from 'react-qr-code';

// 'L' 'M' 'Q' 'H'

function App() {
  const [value, setValue] = useState('');

  return (
    <div className='container'>
      <h3>Percy, gör dig en QR-kod. Skriv något vetja:</h3>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <div className='container__qr'>
        <QRCode value={value} level='M' />
      </div>
    </div>
  );
}

export default App;
