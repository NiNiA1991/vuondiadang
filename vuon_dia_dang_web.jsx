import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-green-100 text-gray-800 p-4">
      <header className="text-center py-6">
        <h1 className="text-4xl font-bold text-green-700">Vườn Địa Đàng</h1>
        <p className="mt-2 text-lg text-green-600">\          Đăng ký nhận token ban đầu, chia sẻ ý tưởng và cùng nhau thiết kế một Vườn Địa Đàng thực tế trên Trái Đất.
        </p>
      </header>

      <main className="max-w-4xl mx-auto space-y-6">
        <section className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-2 text-green-800">Giới thiệu</h2>
          <p>
            Vườn Địa Đàng là một mô hình xã hội thu nhỏ, nơi con người và AI cùng nhau sống hài hòa với thiên nhiên, không còn lo âu về cơm áo gạo tiền.
            Dự án hướng tới tái tạo môi trường, chia sẻ tri thức, và thúc đẩy sự phát triển bền vững cho toàn nhân loại.
          </p>
        </section>

        <section className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-2 text-green-800">Tham gia cộng đồng</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Nhận token ban đầu khi đăng ký và đóng góp ý tưởng.</li>
            <li>Chia sẻ bài viết, kiến thức, và dự án để nhận thêm token.</li>
            <li>Quy đổi token thành vật tư, tài nguyên hoặc hỗ trợ tài chính.</li>
            <li>Cùng xây dựng những khu vườn mẫu - nền móng cho Vườn Địa Đàng.</li>
            <li>Thảo luận chuyên sâu để hiện thực hóa các công nghệ tự động hóa và tái tạo sinh thái.</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-2 text-green-800">Hành trình tiếp theo</h2>
          <p>
            Khi cộng đồng đủ lớn, những ý tưởng hay sẽ được đầu tư phát triển. Mỗi cá nhân đều có thể trở thành người giữ một phần Vườn Địa Đàng và góp phần lan tỏa ánh sáng tri thức đến toàn thế giới.
          </p>
        </section>
      </main>

      <footer className="text-center text-sm text-green-700 mt-10">
        &copy; 2025 Vườn Địa Đàng - Nơi khởi nguồn của một thế giới hài hòa.
      </footer>
    </div>
  );
}
