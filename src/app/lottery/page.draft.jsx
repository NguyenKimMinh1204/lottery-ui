'use client'
import React, { useMemo, useState } from 'react'

function formatDateString(date) {
  const dd = String(date.getDate()).padStart(2, '0')
  const mm = String(date.getMonth() + 1).padStart(2, '0')
  const yyyy = date.getFullYear()
  return `${dd}/${mm}/${yyyy}`
}

export default function LotteryPage() {
  const todayText = useMemo(() => formatDateString(new Date()), [])
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState([]) // array of { number, index }
  const [modalOpen, setModalOpen] = useState(false)
  const [activeNumber, setActiveNumber] = useState(null)

  const numbers = useMemo(() => Array.from({ length: 1000 }, (_, i) => String(i).padStart(6, '0')), [])
  const filtered = useMemo(() => numbers.filter(n => n.includes(query.trim())), [numbers, query])

  const generateMetaForNumber = (n) => {
    let hash = 0
    for (let i = 0; i < n.length; i++) {
      hash = (hash * 31 + n.charCodeAt(i)) >>> 0
    }
    const total = 6 + (hash % 15) // 6..20 tickets per number
    const sold = hash % (total + 1) // 0..total sold
    return { total, sold }
  }

  const metadata = useMemo(() => {
    const map = new Map()
    numbers.forEach(n => map.set(n, generateMetaForNumber(n)))
    return map
  }, [numbers])

  const selectedCountByNumber = useMemo(() => {
    const map = new Map()
    for (const s of selected) {
      map.set(s.number, (map.get(s.number) || 0) + 1)
    }
    return map
  }, [selected])

  const openModal = (n) => {
    setActiveNumber(n)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  const setQuantityForNumber = (num, qty) => {
    setSelected(prev => {
      const others = prev.filter(s => s.number !== num)
      const entries = Array.from({ length: qty }, (_, i) => ({ number: num, index: i + 1 }))
      return [...others, ...entries]
    })
  }

  const subtotal = selected.length * 10000

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Header: left logo+date, right max prize */}
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

      {/* Search */}
      <div className="mb-4">
        <div className="relative max-w-xl">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tìm số (ví dụ: 123456)"
            className="w-full rounded-xl border border-gray-300 bg-white/70 px-4 py-2 pr-10 outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <span className="absolute inset-y-0 right-3 flex items-center text-gray-400">🔎</span>
        </div>
      </div>

      {/* Numbers grid (scrollable fixed height) */}
      <div className="rounded-2xl border border-gray-200 bg-white/70">
        <div className="max-h-80 overflow-y-auto p-4">
          <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-3">
            {filtered.map(n => {
              const count = selectedCountByNumber.get(n) || 0
              const isActive = count > 0
              return (
                <button
                  key={n}
                  onClick={() => openModal(n)}
                  className={`h-12 rounded-xl text-base font-bold tracking-wide transition-all duration-150 border relative ${isActive ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-gray-800 border-gray-200 hover:bg-indigo-50'}`}
                >
                  {n}
                  {count > 0 && (
                    <span className={`absolute -top-2 -right-2 h-6 min-w-[1.5rem] px-1 rounded-full text-xs flex items-center justify-center ${isActive ? 'bg-white text-indigo-700' : 'bg-indigo-600 text-white'}`}>
                      {count}
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Footer bar: subtotal + actions */}
      <div className="mt-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div className="text-lg font-semibold text-gray-800  text-white">
          Giá vé tạm tính: <span className="text-indigo-700 text-white">{subtotal.toLocaleString('vi-VN')} đ</span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSelected([])}
            className="px-4 py-2 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            Chọn lại
          </button>
          <button
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white font-semibold shadow hover:opacity-90"
          >
            Đặt vé
          </button>
        </div>
      </div>

      {/* Modal for selecting ticket indices for a number */}
      {modalOpen && activeNumber && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/30" onClick={closeModal} />
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="w-full max-w-xl rounded-2xl bg-white shadow-lg border border-gray-200">
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
                <div>
                  <div className="text-sm text-gray-500">Chọn vé cho số</div>
                  <div className="text-xl font-bold text-gray-900">{activeNumber}</div>
                </div>
                <button onClick={closeModal} className="rounded-full p-2 hover:bg-gray-100">✕</button>
              </div>
              <div className="px-5 py-4">
                {(() => {
                  const meta = metadata.get(activeNumber) || { total: 0, sold: 0 }
                  const remaining = Math.max(0, meta.total - meta.sold)
                  const items = Array.from({ length: meta.total }, (_, i) => i + 1)
                  const currentQty = selectedCountByNumber.get(activeNumber) || 0
                  return (
                    <>
                      <div className="mb-3 text-sm text-gray-600">
                        Tổng vé: <span className="font-semibold text-gray-800">{meta.total}</span> · Đã bán: <span className="font-semibold text-rose-600">{meta.sold}</span> · Còn lại: <span className="font-semibold text-emerald-600">{remaining}</span>
                      </div>
                      <div className="max-h-72 overflow-y-auto">
                        <div className="grid grid-cols-5 sm:grid-cols-7 md:grid-cols-8 gap-2">
                          {items.map(i => {
                            const disabled = i > remaining // only allow 1..remaining as quantity
                            const active = i === currentQty
                            return (
                              <button
                                key={i}
                                disabled={disabled}
                                onClick={() => setQuantityForNumber(activeNumber, i)}
                                className={`h-9 rounded-lg text-sm font-semibold border transition ${
                                  disabled
                                    ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                                    : active
                                      ? 'bg-indigo-600 text-white border-indigo-600'
                                      : 'bg-white text-gray-800 border-gray-200 hover:bg-indigo-50'
                                }`}
                              >
                                {i}
                              </button>
                            )
                          })}
                        </div>
                      </div>
                    </>
                  )
                })()}
              </div>
              <div className="px-5 py-4 border-t border-gray-200 flex items-center justify-end gap-3">
                <button onClick={closeModal} className="px-4 py-2 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-50">Đóng</button>
                <button onClick={closeModal} className="px-4 py-2 rounded-xl bg-indigo-600 text-white font-semibold shadow hover:opacity-90">Xác nhận</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* How to play */}
      <div className="mt-6 rounded-2xl border border-gray-200 bg-white/70 p-5">
        <div className="text-lg font-bold mb-2">Hướng dẫn cách chơi</div>
        <ol className="list-decimal pl-5 text-gray-700 space-y-1">
          <li>Nhập số cần tìm vào ô tìm kiếm để lọc nhanh.</li>
          <li>Nhấn vào số để chọn/bỏ chọn. Có thể chọn nhiều số.</li>
          <li>Kiểm tra giá vé tạm tính, sau đó nhấn “Đặt vé”.</li>
        </ol>
      </div>
    </div>
  )
}




