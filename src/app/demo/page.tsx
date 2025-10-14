'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function DemoPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="bg-gradient-to-br from-white to-gray-50 shadow-lg border-b border-gray-200">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between py-4">
            {/* Logo */}
            <a href="/" className="flex-shrink-0 transition-transform hover:scale-105">
              <img 
                src="/logo.2d2d0d2c.svg" 
                alt="Logo" 
                className="w-[150px] h-[74px]"
              />
            </a>

            {/* Sidebar Toggle */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden mr-3 p-2 rounded-lg bg-gradient-to-br from-purple-100 to-indigo-100 hover:from-purple-600 hover:to-indigo-600 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
              aria-label="Mở menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Mobile Icons */}
            <div className="flex lg:hidden items-center ml-auto gap-2">
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-gray-700 hover:text-purple-600 transition-all"
                aria-label="Giỏ hàng"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              <a href="/" className="px-5 py-3 text-gray-700 font-semibold rounded-full hover:text-blue-500 transition-all duration-300 relative group">
                Chọn số
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-500 group-hover:w-4/5 transition-all duration-300"></span>
              </a>
              <a href="/" className="px-5 py-3 text-gray-700 font-semibold rounded-full hover:text-blue-500 transition-all duration-300 relative group">
                Gói cước
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-500 group-hover:w-4/5 transition-all duration-300"></span>
              </a>
              
              {/* Hỗ trợ Dropdown */}
              <div className="relative group">
                <button className="px-5 py-3 text-gray-700 font-semibold rounded-full hover:text-blue-500 transition-all duration-300 flex items-center gap-1">
                  Hỗ trợ
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden">
                  <a href="#" className="block px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 hover:text-white transition-all duration-300">
                    Câu hỏi thường gặp
                  </a>
                  <a href="#" className="block px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 hover:text-white transition-all duration-300">
                    Điểm cung cấp dịch vụ
                  </a>
                </div>
              </div>

              {/* Giới thiệu Dropdown */}
              <div className="relative group">
                <button className="px-5 py-3 text-gray-700 font-semibold rounded-full hover:text-blue-500 transition-all duration-300 flex items-center gap-1">
                  Giới thiệu
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden">
                  <a href="#" className="block px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 hover:text-white transition-all duration-300">
                    Tin tức
                  </a>
                </div>
              </div>
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Nạp tiền nhanh
              </button>
              
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative w-12 h-12 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-gray-300 hover:border-purple-600 hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
                aria-label="Giỏ hàng"
              >
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Sidebar Menu */}
      {isSidebarOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
          <div className={`fixed top-0 left-0 h-full w-80 bg-gradient-to-br from-gray-800 to-gray-900 text-white z-50 transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 flex items-center justify-between border-b border-gray-700">
              <h5 className="text-xl font-semibold flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
                Menu Chính
              </h5>
              <button onClick={() => setIsSidebarOpen(false)} className="text-white hover:text-gray-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <nav className="p-4 space-y-2">
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
      )}

      {/* Cart Offcanvas */}
      {isCartOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsCartOpen(false)}
          />
          <div className="fixed top-0 right-0 h-full w-80 bg-white z-50 shadow-2xl">
            <div className="p-6 border-b flex items-center justify-between">
              <h5 className="text-xl font-semibold">Giỏ hàng</h5>
              <button onClick={() => setIsCartOpen(false)} className="text-gray-600 hover:text-gray-900">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <p className="text-gray-500">Giỏ hàng hiện tại trống.</p>
              <div className="mt-6 space-y-3">
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
      )}

      {/* Main Content */}
      <main className="flex-1 bg-red-300 min-h-[60vh]">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-800">Main content</h1>
        </div>
      </main>

      {/* Footer */}
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

      {/* Login Modal */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full">
            <div className="p-6 border-b flex items-center justify-between">
              <h5 className="text-xl font-semibold">Đăng nhập tài khoản</h5>
              <button 
                onClick={() => setIsLoginModalOpen(false)}
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
      )}
    </div>
  );
}
