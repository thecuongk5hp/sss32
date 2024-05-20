import React, { useState } from 'react';

function ColorForm() {
  const [color, setColor] = useState('');
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('Color: ' + color);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Màu sắc:
        <input type="text" value={color} onChange={e => setColor(e.target.value)} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
export default ColorForm;