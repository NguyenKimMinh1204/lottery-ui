'use client'
import React from 'react'
// Khung 1 số trong lưới số
// Hiển thị:
// - Khi chưa chọn: badge góc phải = số vé còn lại
// - Khi đã chọn: nền nổi bật + badge bên trái = số vé đã chọn, vẫn giữ badge góc phải cho vé còn lại
export default function ChooseNumber({ filtered, selectedCountByNumber, getRemaining, onOpen }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white/70">
      <div className="max-h-80 overflow-y-auto p-4">
        <div
          className="grid gap-3"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))' }}
        >
          {filtered.map(n => {
            const count = selectedCountByNumber.get(n) || 0
            const isActive = count > 0
            const remaining = typeof getRemaining === 'function' ? getRemaining(n) : 0
            return (
              <button
                key={n}
                onClick={() => onOpen(n)}
                className={`h-12 rounded-xl text-base font-bold tracking-wide transition-all duration-150 border relative ${
                  isActive
                    ? 'bg-indigo-600 text-white border-indigo-600 pl-10 pr-9'
                    : 'bg-white text-gray-800 border-gray-200 hover:bg-indigo-50 pr-9'
                }`}
                style={{ minWidth: '140px', maxWidth: '200px' }}
              >
                {/* Badge bên trái khi đã chọn: số lượng vé đã chọn */}
                {isActive && (
                  <span className="absolute left-0 top-0 bottom-0 w-8 rounded-l-xl bg-indigo-700/90 flex items-center justify-center text-white text-sm font-extrabold">
                    {count}
                  </span>
                )}

                {/* Nội dung số */}
                {n}

                {/* Badge góc phải (bên trong): số vé còn lại */}
                <span className={`absolute top-1 right-1 h-6 min-w-[1.5rem] px-1 rounded-full text-xs flex items-center justify-center ${
                  isActive ? 'bg-white text-indigo-700' : 'bg-indigo-600 text-white'
                }`}>
                  {remaining}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}


