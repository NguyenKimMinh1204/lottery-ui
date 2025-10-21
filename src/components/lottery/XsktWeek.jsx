'use client'
import React, { useState } from 'react'
import XsktDayCard from './XsktDayCard'

// Danh sách tuần XSKT: render 7 ngày (Thứ 2..Chủ nhật)
// Có thể truyền `companies` để tuỳ biến danh sách công ty theo ngày
function formatVietnameseDay(date) {
  const days = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy']
  return days[date.getDay()]
}

function formatDateString(date) {
  const dd = String(date.getDate()).padStart(2, '0')
  const mm = String(date.getMonth() + 1).padStart(2, '0')
  const yyyy = date.getFullYear()
  return `${dd}/${mm}/${yyyy}`
}

const defaultCompanies = [
  { id: 'ct01', name: 'TP.HCM', logo: '/img_nhadai/hochiminh.jpg', endTime: '16:15' },
  { id: 'ct02', name: 'Đồng Tháp', logo: '/img_nhadai/dongthap.jpg', endTime: '16:15' },
  { id: 'ct03', name: 'Cà Mau', logo: '/img_nhadai/camau.jpg', endTime: '16:15' },
  { id: 'ct04', name: 'Bến Tre', logo: '/img_nhadai/mienba.jpg', endTime: '16:15' },
  { id: 'ct05', name: 'Vũng Tàu', logo: '/img_nhadai/mienba.jpg', endTime: '16:15' },
  { id: 'ct06', name: 'Bạc Liêu', logo: '/img_nhadai/mienba.jpg', endTime: '16:15' },  
  { id: 'ct01', name: 'TP.HCM', logo: '/img_nhadai/hochiminh.jpg', endTime: '16:15' }
]

export default function XsktWeek({ companies = defaultCompanies }) {
  const [activeIdx, setActiveIdx] = useState(null)
  const [hoverIdx, setHoverIdx] = useState(null)

  return (
    <div className="container mx-auto px-4 py-6">
      {[...Array(7)].map((_, idx) => {
        const d = new Date()
        // Thứ hai là ngày đầu tuần; ánh xạ idx (0..6) -> Thứ hai..Chủ nhật
        const mondayOffset = ((d.getDay() + 6) % 7) // 0 for Monday
        d.setDate(d.getDate() - mondayOffset + idx)
        const dayText = formatVietnameseDay(d)
        const dateText = formatDateString(d)

        const isActive = activeIdx === idx || hoverIdx === idx // hover hoặc đã chọn
        return (
          <XsktDayCard
            key={idx}
            dayText={dayText}
            dateText={dateText}
            companies={companies}
            isActive={isActive}
            onClick={() => setActiveIdx(idx)}
            onMouseEnter={() => setHoverIdx(idx)}
            onMouseLeave={() => setHoverIdx(null)}
          />
        )
      })}
    </div>
  )
}


