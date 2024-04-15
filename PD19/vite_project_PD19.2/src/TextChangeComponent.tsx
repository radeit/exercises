import { useState } from 'react';

function TextChangeComponent() {
  const [text, setText] = useState('Pradinis tekstas');

  const changeText = () => {
    setText('Naujas tekstas');
  };

  return (
    <div>
      <p>{text}</p> {}
      <button onClick={changeText}>Keisti teksta</button> {}
    </div>
  );
}

export default TextChangeComponent;
