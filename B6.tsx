import React, { useState } from 'react';

function AddAccountForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (username === '' || email === '' || password === '' || rePassword === '') {
      alert('Bạn cần nhập đủ thông tin');
      return false;
    }
    if (password !== rePassword) {
      alert('Mật khẩu nhập lại không khớp');
      return false;
    }
    const account = {
      username,
      email,
      password,
      rePassword
    };
    console.log(account);
  };
  return (
    <div>
      <h2>Thêm Mới Tài Khoản</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Họ và tên:
          <input 
            type="text" 
            value={username} 
            onChange={e => setUsername(e.target.value)} 
          />
        </label>
        <label>
          Email:
          <input 
            type="email" 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
          />
        </label>
        <label>
          Mật khẩu:
          <input 
            type="password" 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
          />
        </label>
        <label>
          Nhập lại mật khẩu:
          <input 
            type="password" 
            value={rePassword} 
            onChange={e => setRePassword(e.target.value)} 
          />
        </label>
        <button type="submit">Đăng ký</button>
      </form>
    </div>
  );
}
export default AddAccountForm;