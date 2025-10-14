export default function LoginModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full">
        <div className="p-6 border-b flex items-center justify-between">
          <h5 className="text-xl font-semibold">Đăng nhập tài khoản</h5>
          <button 
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-6">
          <p className="mb-4 text-gray-600">Nhập email và mật khẩu của bạn:</p>
          <form>
            <div className="mb-4">
              <label htmlFor="loginEmail" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="loginEmail"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="you@example.com"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="loginPassword" className="block text-sm font-medium text-gray-700 mb-2">
                Mật khẩu
              </label>
              <input
                type="password"
                id="loginPassword"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="••••••••"
              />
            </div>
            <p className="text-xs text-gray-500 mb-4">
              This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
            </p>
          </form>
        </div>
        
        <div className="p-6 border-t">
          <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all mb-3">
            Đăng nhập
          </button>
          <p className="mb-2 text-sm">
            Khách hàng mới? <a href="#" className="text-purple-600 hover:underline">Tạo tài khoản</a>
          </p>
          <p className="text-sm">
            <a href="#" className="text-purple-600 hover:underline">Quên mật khẩu?</a>{' '}
            <span className="text-gray-500">Khôi phục mật khẩu</span>
          </p>
        </div>
      </div>
    </div>
  );
}