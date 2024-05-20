import React, { useState } from 'react';

function GenderForm() {
  const [gender, setGender] = useState('');
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!gender) {
      alert('Vui lòng chọn giới tính');
      return;
    }
    console.log(`Giới tính: ${gender}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Giới Tính</h2>
      <label>
        <input 
          type="radio" 
          name="gender" 
          value="Nam" 
          checked={gender === 'Nam'} 
          onChange={() => setGender('Nam')} 
        />
        Nam
      </label>
      <label>
        <input 
          type="radio" 
          name="gender" 
          value="Nữ" 
          checked={gender === 'Nữ'} 
          onChange={() => setGender('Nữ')} 
        />
        Nữ
      </label>
      <label>
        <input 
          type="radio" 
          name="gender" 
          value="Khác" 
          checked={gender === 'Khác'} 
          onChange={() => setGender('Khác')} 
        />
        Khác
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
export default GenderForm;