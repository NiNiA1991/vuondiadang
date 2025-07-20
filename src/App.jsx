import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setRegisteredUsers([...registeredUsers, formData]);
      setFormData({ name: '', email: '' });
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }
  };

  return (
    <div className="container">
      <h1>Vườn Địa Đàng 🌿</h1>
      <p>Chào mừng đến với hành trình xây dựng Vườn Địa Đàng thực tế trên Trái Đất.</p>

      <form onSubmit={handleSubmit} className="form">
        <h2>📩 Đăng ký nhận Token ban đầu</h2>
        <input
          type="text"
          name="name"
          placeholder="Tên của bạn"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email của bạn"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <button type="submit">Đăng ký</button>
        {showSuccess && <p className="success">✅ Đăng ký thành công!</p>}
      </form>

      <div className="list">
        <h2>🌟 Bảng vinh danh người đóng góp</h2>
        <ul>
          {registeredUsers.map((user, index) => (
            <li key={index}>
              {user.name} ({user.email})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
