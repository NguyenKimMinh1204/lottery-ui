'use client';
import React from 'react';

export default function Header({ setIsSidebarOpen, setIsCartOpen, cartCount = 0 }) {
  return (
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
  );
}
