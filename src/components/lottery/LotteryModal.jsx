'use client'
import React from 'react'

export default function LotteryModal({ open, number, meta, currentQty, onClose, onSelectQty }) {
  if (!open || !number) return null

  const remaining = Math.max(0, (meta?.total || 0) - (meta?.sold || 0))
  const items = Array.from({ length: meta?.total || 0 }, (_, i) => i + 1)

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="w-full max-w-xl rounded-2xl bg-white shadow-lg border border-gray-200">
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
            <div>
              <div className="text-sm text-gray-500">Chọn vé cho số</div>
              <div className="text-xl font-bold text-gray-900">{number}</div>
            </div>
            <button onClick={onClose} className="rounded-full p-2 hover:bg-gray-100">✕</button>
          </div>
          <div className="px-5 py-4">
            <div className="mb-3 text-sm text-gray-600">
              Tổng vé: <span className="font-semibold text-gray-800">{meta?.total || 0}</span> · Đã bán: <span className="font-semibold text-rose-600">{meta?.sold || 0}</span> · Còn lại: <span className="font-semibold text-emerald-600">{remaining}</span>
            </div>
            <div className="max-h-72 overflow-y-auto">
              <div className="grid grid-cols-5 sm:grid-cols-7 md:grid-cols-8 gap-2">
                {items.map(i => {
                  const disabled = i > remaining
                  const active = i === (currentQty || 0)
                  return (
                    <button
                      key={i}
                      disabled={disabled}
                      onClick={() => onSelectQty(i)}
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
          </div>
          <div className="px-5 py-4 border-t border-gray-200 flex items-center justify-end gap-3">
            <button onClick={onClose} className="px-4 py-2 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-50">Đóng</button>
            <button onClick={onClose} className="px-4 py-2 rounded-xl bg-indigo-600 text-white font-semibold shadow hover:opacity-90">Xác nhận</button>
          </div>
        </div>
      </div>
    </div>
  )
}


