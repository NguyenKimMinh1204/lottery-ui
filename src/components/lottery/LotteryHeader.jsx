'use client'
import React from 'react'

export default function LotteryHeader({ todayText }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white/70 shadow-sm p-5 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4">
        <div className="flex items-center gap-4">
          <img src="/img_nhadai/hochiminh.jpg" alt="Logo" className="h-14 w-14 rounded-lg object-cover ring-1 ring-gray-200" />
          <div>
            <div className="text-sm text-gray-500">Ngày</div>
            <div className="text-base font-semibold text-gray-800">{todayText}</div>
          </div>
        </div>
        <div className="md:col-span-2 flex flex-col md:items-end gap-2">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-fuchsia-600 shadow">
            Vé còn lại: 12,345
          </div>
          <div className="text-2xl md:text-4xl font-extrabold tracking-tight text-indigo-700 text-right">
            Giải đặc biệt hôm nay: <span className="text-fuchsia-600">2.000.000.000đ</span>
          </div>
        </div>
      </div>
    </div>
  )
}


