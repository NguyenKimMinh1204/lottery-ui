'use client'
import React from 'react'

// Thẻ hiển thị 1 ngày XSKT với danh sách công ty mở thưởng
// Props:
// - dayText: tên ngày (Thứ hai, Thứ ba, ...)
// - dateText: ngày dd/mm/yyyy
// - companies: danh sách công ty (id, name, logo, endTime)
// - isActive: trạng thái nổi bật (hover/chọn)
// - onClick/onMouseEnter/onMouseLeave: sự kiện tương tác
export default function XsktDayCard({ dayText, dateText, companies, isActive, onClick, onMouseEnter, onMouseLeave }) {
  return (
    <div className="border border-gray-200 rounded-2xl shadow-sm p-6 mb-6 bg-gray-50 rounded-xl ">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
        {/* Left: day centered, date near bottom */}
        <div
          className={`md:col-span-1 flex flex-col h-full rounded-2xl p-4 transition-all duration-300 cursor-pointer ${isActive ? 'text-white shadow-lg' : 'bg-white shadow-md'}`}
          onClick={onClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          style={isActive ? { background: 'linear-gradient(to left, #cd0394, #6127bf 100%, #3e1074)' } : {}}
        >
          <div className="flex-1 flex items-center justify-center">
            <div className={`text-5xl font-extrabold tracking-tight leading-tight text-center drop-shadow-sm ${isActive ? 'text-white' : 'text-indigo-700'}`}>
              {dayText}
            </div>
          </div>
          <div className={`text-center text-base md:text-lg mt-2 font-medium ${isActive ? 'text-white/90' : 'text-slate-500'}`}>
            {dateText}
          </div>
        </div>

        {/* Right: grid (<=6) hoặc thanh trượt ngang (>6) */}
        <div className="md:col-span-3">
          {(() => {
            const isScrollable = Array.isArray(companies) && companies.length > 6
            return (
              <div className={isScrollable ? 'overflow-x-auto -mx-2 px-2' : ''}>
                <div className={isScrollable ? 'flex gap-4' : 'grid grid-cols-2 sm:grid-cols-3 gap-5'}>
                  {companies.map((c) => (
                    <div
                      key={c.id}
                      className={`${isScrollable ? 'shrink-0 w-48' : ''} group rounded-xl border border-indigo-100 p-4 text-center transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 bg-white/60`}
                    >
                      <div className="mx-auto h-12 w-12 rounded-full overflow-hidden ring-2 ring-indigo-200/60">
                        <img src={c.logo} alt={c.name} className="h-full w-full object-cover" />
                      </div>
                      <div className="mt-2 font-semibold text-gray-800">{c.name}</div>
                      <div className="mt-1">
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-700 bg-amber-50 rounded-full px-2 py-0.5">
                          Kết thúc: {c.endTime}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })()}
        </div>
      </div>
    </div>
  )
}


