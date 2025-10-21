import React from 'react'
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber'

const LotteryCard = ({ ticket, onBuy, onDetail }) => {
  return (
    <div className="rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 min-w-[250px] max-w-[320px] p-5 flex flex-col h-full relative bg-gray-50 rounded-xl">
      {/* Header */}
      <div className="flex items-center">
        <div className="text-lg font-bold text-indigo-600">{ticket.company}</div>
      </div>

      {/* Ticket Info */}
      <div className="flex flex-col items-center justify-center rounded-xl py-6 border border-dashed border-indigo-300">
        <ConfirmationNumberIcon sx={{ fontSize: 36, color: '#6b21a8' }} />
        <div className="text-2xl font-extrabold text-indigo-700 tracking-widest mt-1">
          {ticket.ticketNumber}
        </div>
      </div>

      {/* Footer Info */}
      <div className="text-sm text-gray-600">
        <div>Ngày quay: <span className="font-semibold text-gray-800">{ticket.drawDate}</span></div>
        <div>Giá vé: <span className="font-semibold text-gray-800">{ticket.price}</span></div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-2">
        <button
          onClick={onBuy}
          className="w-full py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white font-semibold shadow hover:opacity-90"
        >
          Mua vé
        </button>
        <button
          onClick={onDetail}
          className="w-full py-2 rounded-xl border border-indigo-400 text-indigo-600 font-semibold hover:bg-indigo-50"
        >
          Xem chi tiết
        </button>
      </div>
    </div>
  )
}

export default LotteryCard


