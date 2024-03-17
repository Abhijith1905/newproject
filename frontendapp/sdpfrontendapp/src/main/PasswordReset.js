import React, { useState } from 'react';
import axios from 'axios';

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    username: '',
    currentPassword: '',
    newPassword: ''
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:2000/resetpassword', formData);
      setMessage(response.data);
      setError('');
    } catch (error) {
      setMessage('');
      setError(error.message);
    }
  };

  return (
    <div>
      <h3 align="center"><u>Reset Password</u></h3>
      {message && <h4 align="center">{message}</h4>}
      {error && <h4 align="center">{error}</h4>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        </div>
        <div>
          <label>Current Password</label>
          <input type="password" name="currentPassword" value={formData.currentPassword} onChange={handleChange} required />
        </div>
        <div>
          <label>New Password</label>
          <input type="password" name="newPassword" value={formData.newPassword} onChange={handleChange} required />
        </div>
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;
