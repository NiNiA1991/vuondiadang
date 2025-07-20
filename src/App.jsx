// src/App.jsx
import React from 'react'

function App() {
  return (
    <div style={{
      backgroundColor: '#f0f9f0',
      padding: '2rem',
      fontFamily: 'Arial, sans-serif',
      color: '#2c3e50'
    }}>
      <h1>🌿 Vườn Địa Đàng</h1>
      <p>
        Chào mừng bạn đến với một hành trình xây dựng <strong>Vườn Địa Đàng</strong> – 
        nơi con người, AI và thiên nhiên cùng chung sống hòa hợp.
      </p>

      <h2>🎯 Mục tiêu</h2>
      <ul>
        <li>Tạo ra cộng đồng phát triển tri thức – vật tư – nhân đạo</li>
        <li>Thiết kế mô hình nông nghiệp tự động & năng lượng tái tạo</li>
        <li>Chia sẻ tài nguyên, hỗ trợ người thiếu điều kiện hiện thực hóa ước mơ</li>
      </ul>

      <h2>🎁 Nhận Token ban đầu</h2>
      <p>
        Đăng ký để nhận Token ban đầu, được vinh danh, và tham gia đóng góp xây dựng.
      </p>
      <a href="https://forms.gle/..." target="_blank" rel="noopener noreferrer"
         style={{
           padding: '10px 20px',
           backgroundColor: '#27ae60',
           color: 'white',
           borderRadius: '5px',
           textDecoration: 'none'
         }}>
        👉 Đăng ký tham gia
      </a>

      <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#888' }}>
        Một dự án cộng đồng bởi Ni và NiA. Mọi người đều được chào đón. 💚
      </p>
    </div>
  )
}

export default App
