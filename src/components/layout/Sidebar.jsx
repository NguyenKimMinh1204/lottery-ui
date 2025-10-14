export default function Sidebar({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
        onClick={onClose}
      />
      <div className={`fixed top-0 left-0 h-full w-80 bg-gradient-to-br from-gray-800 to-gray-900 text-white z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 flex items-center justify-between border-b border-gray-700">
          <h5 className="text-xl font-semibold flex items-center gap-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
            Menu Chính
          </h5>
          <button onClick={onClose} className="text-white hover:text-gray-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <nav className="p-4 space-y-2 font-gilroy-semibold">
          <a href="/choose-number" className="flex items-center gap-3 px-6 py-4 rounded-lg text-gray-200 hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 hover:text-white hover:translate-x-2 transition-all duration-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Chọn số
          </a>
          
          <a href="/packages" className="flex items-center gap-3 px-6 py-4 rounded-lg text-gray-200 hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 hover:text-white hover:translate-x-2 transition-all duration-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            Gói cước
          </a>
          
          <a href="/top-up" className="flex items-center gap-3 px-6 py-4 rounded-lg text-gray-200 hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 hover:text-white hover:translate-x-2 transition-all duration-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Nạp tiền
          </a>

          <div className="pt-4 border-t border-gray-700">
            <p className="px-6 text-sm text-gray-400 mb-2">Tiện ích</p>
            <a href="/esim" className="flex items-center gap-3 px-6 py-3 rounded-lg text-gray-200 hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 hover:text-white hover:translate-x-2 transition-all duration-300">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
              eSIM
            </a>
            <a href="/order-tracking" className="flex items-center gap-3 px-6 py-3 rounded-lg text-gray-200 hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 hover:text-white hover:translate-x-2 transition-all duration-300">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Tra cứu đơn hàng
            </a>
          </div>

          <div className="pt-4 border-t border-gray-700">
            <p className="px-6 text-sm text-gray-400 mb-2">Hỗ trợ</p>
            <a href="/faq" className="flex items-center gap-3 px-6 py-3 rounded-lg text-gray-200 hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 hover:text-white hover:translate-x-2 transition-all duration-300">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Câu hỏi thường gặp
            </a>
            <a href="/service-points" className="flex items-center gap-3 px-6 py-3 rounded-lg text-gray-200 hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 hover:text-white hover:translate-x-2 transition-all duration-300">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Điểm cung cấp dịch vụ
            </a>
          </div>

          <div className="pt-4 border-t border-gray-700">
            <p className="px-6 text-sm text-gray-400 mb-2">Giới thiệu</p>
            <a href="/news" className="flex items-center gap-3 px-6 py-3 rounded-lg text-gray-200 hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 hover:text-white hover:translate-x-2 transition-all duration-300">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              Tin tức
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
