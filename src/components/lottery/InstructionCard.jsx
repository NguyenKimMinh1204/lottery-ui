'use client'
import React from 'react'

// Thẻ hướng dẫn nhanh cách chơi cho người dùng mới
export default function InstructionCard() {
  return (
    <div className="mt-6 rounded-2xl border border-gray-200 bg-white/70 p-5">
      <div className="text-lg font-bold mb-2">Hướng dẫn cách chơi</div>
      <ol className="list-decimal pl-5 text-gray-700 space-y-1">
        <li>Nhập số cần tìm vào ô tìm kiếm để lọc nhanh.</li>
        <li>Nhấn vào số để chọn/bỏ chọn. Có thể chọn nhiều số.</li>
        <li>Kiểm tra giá vé tạm tính, sau đó nhấn “Đặt vé”.</li>
      </ol>
    </div>
  )
}


