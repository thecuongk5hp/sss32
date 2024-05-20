import React, { useState } from 'react';

function BirthdayForm() {
  const [birthday, setBirthday] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('Ngày sinh: ' + birthday);
  };

  return (
    <div>
      <h2>Nhập Ngày Sinh</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Ngày sinh:
          <input 
            type="date" 
            value={birthday} 
            onChange={e => setBirthday(e.target.value)} 
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {birthday && <p>Ngày sinh của bạn là: {birthday}</p>}
    </div>
  );
}

export default BirthdayForm;