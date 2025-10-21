'use client'
import React, { useEffect, useRef, useState } from 'react'
// Khung 1 số trong lưới số
// Hiển thị:
// - Khi chưa chọn: badge góc phải = số vé còn lại
// - Khi đã chọn: nền nổi bật + badge bên trái = số vé đã chọn, vẫn giữ badge góc phải cho vé còn lại
// Lưới số có lazy-loading (infinite scroll) để tránh render toàn bộ gây lag UI
// Props:
// - filtered: danh sách số đã lọc theo từ khoá
// - selectedCountByNumber: Map số -> số lượng đã chọn (để hiện badge trái)
// - getRemaining: hàm lấy số vé còn lại cho một số (để hiện badge phải)
// - onOpen: mở modal chọn số lượng cho số được click
// - maxRows: số hàng tối đa hiển thị theo chiều dọc (mặc định 5), phần còn lại cuộn dọc
// - pageSize: số phần tử tải thêm mỗi lần chạm đáy scroll (mặc định 120)
export default function ChooseNumber({ filtered, selectedCountByNumber, getRemaining, onOpen, maxRows = 5, pageSize = 120 }) {
  // Tính chiều cao tối đa tương ứng ~5 hàng (mặc định)
  // h-12 = 48px; gap-3 = 12px; padding container p-4 = 16px x2
  const maxHeightPx = 48 * maxRows + 12 * (maxRows - 1) + 32
  // Lazy render theo kiểu infinite scroll để tránh render toàn bộ
  const scrollRef = useRef(null)
  const [visibleCount, setVisibleCount] = useState(pageSize)
  // Mỗi khi danh sách lọc thay đổi, reset lượng item đang hiển thị về một trang
  useEffect(() => { setVisibleCount(pageSize) }, [filtered, pageSize])
  const handleScroll = () => {
    const el = scrollRef.current
    if (!el) return
    // Khi cuộn gần chạm đáy 120px, nạp thêm pageSize phần tử
    if (el.scrollTop + el.clientHeight >= el.scrollHeight - 120) {
      setVisibleCount(prev => Math.min(prev + pageSize, filtered.length))
    }
  }
  return (
    <div className="rounded-2xl border border-gray-200 bg-white/70">
      <div className="overflow-y-auto p-4" style={{ maxHeight: maxHeightPx }} ref={scrollRef} onScroll={handleScroll}>
        <div
          className="grid gap-3"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))' }}
        >
          {filtered.slice(0, visibleCount).map(n => {
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
          {/* Gợi ý đang tải thêm khi còn phần tử chưa render */}
          {visibleCount < filtered.length && (
            <div className="col-span-full flex items-center justify-center py-2 text-xs text-gray-500">
              Đang tải thêm...
            </div>
          )}
        </div>
      </div>
    </div>
  )
}


