export default function Cart({ isOpen, onClose, cartCount = 0 }) {
  if (!isOpen) return null;

  return (
    <>
      {/* Dropdown panel under header (no overlay) */}
      <div 
        className="fixed z-50 bg-white shadow-2xl border border-gray-200 rounded-b-2xl
        top-[88px] left-0 right-0 w-full max-h-[75vh] overflow-auto
        lg:left-auto lg:right-4 lg:w-[380px] lg:rounded-2xl"
      >
        <div className="p-4 border-b flex items-center justify-between">
          <h5 className="text-lg font-semibold">Giỏ hàng</h5>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-4">
          <p className="text-gray-500">Giỏ hàng hiện tại trống.</p>
          <div className="mt-4 space-y-3">
            <a href="/cart" className="block w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
              Xem giỏ hàng
            </a>
            <a href="/checkout" className="block w-full border-2 border-gray-300 text-gray-700 text-center py-3 rounded-lg font-semibold hover:border-purple-600 hover:text-purple-600 transition-all">
              Thanh toán
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

