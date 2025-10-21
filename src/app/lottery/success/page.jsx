'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation'

export default function LotterySuccessPage() {
  const searchParams = useSearchParams()
  const orderId = searchParams.get('orderId')

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-2xl mx-auto rounded-2xl border border-gray-200 bg-white/80 shadow p-8 text-center">
        <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-emerald-50 border border-emerald-200">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-emerald-600">
            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.28-2.28a.75.75 0 0 0-1.06-1.06L11 13.13l-2.47-2.47a.75.75 0 1 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l5-5Z" clipRule="evenodd" />
          </svg>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900 mb-2">Đặt vé thành công</h1>
        <p className="text-gray-600 mb-6">Cảm ơn bạn đã đặt vé. Chúng tôi đã ghi nhận đơn hàng của bạn.</p>

        {orderId && (
          <div className="mb-6 inline-flex items-center gap-2 rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm text-indigo-700">
            <span>Mã đơn hàng:</span>
            <span className="font-semibold">{orderId}</span>
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="/lottery" className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white font-semibold shadow hover:opacity-90 w-full sm:w-auto text-center">
            Mua thêm vé
          </a>
          <a href="/history" className="px-5 py-2.5 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-50 w-full sm:w-auto text-center">
            Xem lịch sử mua vé
          </a>
        </div>
      </div>
    </div>
  )
}


