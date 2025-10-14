export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-24 pb-8 mt-auto">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div>
          <div className="mb-8">
            <img 
              src="/logo.2d2d0d2c.svg" 
              alt="Logo" 
              className="w-[400px] h-[180px]"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4">Giới thiệu</h3>
              <ul className="space-y-2 text-gray-700">
                <li>&gt; tin tức</li>
                <li>Tải xuống logo VNSKY</li>
                <li>
                  (<span className="text-blue-600 font-bold">1900 5222</span>) 1.000đ/Phút
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-xl mb-4">Trung tâm hỗ trợ</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Câu hỏi thường gặp</li>
                <li>Chính sách bảo mật</li>
                <li>Quản lý chất lượng</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div>
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-xl mb-4">Kết nối với VNSKY</h3>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4">Tải ứng dụng</h3>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4">Tiện ích</h3>
              <ul className="space-y-2 text-gray-700">
                <li>&gt; eSim</li>
                <li>Mua SIM</li>
                <li>Nạp tiền</li>
                <li>Tra cứu đơn hàng</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-xl mb-4">Phương thức thanh toán</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  );
}
