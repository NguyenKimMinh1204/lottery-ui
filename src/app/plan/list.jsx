'use client'

import React from 'react'
import LotteryCard from './LotteryCard'

const LotteryList = () => {
  const tickets = [
    {
      id: 'VS001',
      company: 'Xổ số TP.HCM',
      drawDate: '20/10/2025',
      ticketNumber: '123456',
      price: '10.000đ',
      status: 'pending'
    },
    {
      id: 'VS002',
      company: 'Xổ số Đồng Tháp',
      drawDate: '20/10/2025',
      ticketNumber: '654321',
      price: '10.000đ',
      status: 'won'
    },
    {
      id: 'VS003',
      company: 'Xổ số Long An',
      drawDate: '21/10/2025',
      ticketNumber: '789012',
      price: '10.000đ',
      status: 'lost'
    }
  ]

  return (
    <div className="min-h-screen  py-10 px-5">
      <h1 className="text-3xl font-bold text-center mb-10 text-indigo-700">
        🎟️ Danh sách vé số hôm nay
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center bg">
        {tickets.map(ticket => (
          <LotteryCard
            key={ticket.id}
            ticket={ticket}
            onBuy={() => alert(`Mua vé ${ticket.ticketNumber}`)}
            onDetail={() => alert(`Chi tiết vé ${ticket.id}`)}
          />
        ))}
      </div>
    </div>
  )
}

export default LotteryList
