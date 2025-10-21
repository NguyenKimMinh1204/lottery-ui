'use client'
import React from 'react'

// Thanh tóm tắt và hành động ở cuối trang chọn số
// Props:
// - subtotal: tổng tiền tạm tính
// - onReset: callback xoá toàn bộ lựa chọn
// - onSubmit: callback đặt vé
export default function SummaryBar({ subtotal, onReset, onSubmit }) {
  return (
    <div className="mt-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
      <div className="text-lg font-semibold text-gray-800  text-white">
        Giá vé tạm tính: <span className="text-indigo-700 text-white">{subtotal.toLocaleString('vi-VN')} đ</span>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={onReset}
          className="px-4 py-2 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-50"
        >
          Chọn lại
        </button>
        <button
          onClick={onSubmit}
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white font-semibold shadow hover:opacity-90"
        >
          Đặt vé
        </button>
      </div>
    </div>
  )
}


