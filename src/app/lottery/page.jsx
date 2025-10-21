'use client'
import React, { useMemo, useState } from 'react'
import LotteryHeader from '@/components/lottery/LotteryHeader'
import ChooseNumber from '@/components/lottery/ChooseNumber'
import LotteryModal from '@/components/lottery/LotteryModal'
import SummaryBar from '@/components/lottery/SummaryBar'
import InstructionCard from '@/components/lottery/InstructionCard'

// Tiện ích: định dạng ngày dd/mm/yyyy để hiển thị ở phần đầu trang
function formatDateString(date) {
  const dd = String(date.getDate()).padStart(2, '0')
  const mm = String(date.getMonth() + 1).padStart(2, '0')
  const yyyy = date.getFullYear()
  return `${dd}/${mm}/${yyyy}`
}

export default function LotteryPage() {
  const todayText = useMemo(() => formatDateString(new Date()), [])
  // Từ khóa tìm kiếm để lọc lưới số
  const [query, setQuery] = useState('')
  // Danh sách vé đã chọn. Mỗi phần tử là một vé của một số với chỉ mục bắt đầu từ 1
  // Ví dụ: { number: '000123', index: 2 } nghĩa là vé thứ 2 của số 000123
  const [selected, setSelected] = useState([])
  // Trạng thái mở/đóng modal chọn số lượng theo từng số
  const [modalOpen, setModalOpen] = useState(false)
  // Số đang thao tác trong modal
  const [activeNumber, setActiveNumber] = useState(null)

  // Tập số hiển thị (định dạng 6 chữ số). Giới hạn tối đa 10 số
  const numbers = useMemo(() => Array.from({ length: 10 }, (_, i) => String(i).padStart(6, '0')), [])
  const filtered = useMemo(() => numbers.filter(n => n.includes(query.trim())), [numbers, query])

  // Thông tin vé theo từng số. Sửa tại đây nếu thay đổi quy định.
  // - total: tổng vé tối đa mỗi số (giới hạn hiện tại: 20)
  // - sold: số vé đã bán (giả lập có tính quyết định từ chuỗi số)
  const generateMetaForNumber = (n) => {
    let hash = 0
    for (let i = 0; i < n.length; i++) {
      hash = (hash * 31 + n.charCodeAt(i)) >>> 0
    }
    // Cấu hình: tối đa 10 vé mỗi số, còn lại 9 vé (sold = 1)
    const total = 10
    const sold = 1
    return { total, sold }
  }

  // Bảng băm: Map<number, { total, sold }> để tra cứu nhanh ở lưới và modal
  const metadata = useMemo(() => {
    const map = new Map()
    numbers.forEach(n => map.set(n, generateMetaForNumber(n)))
    return map
  }, [numbers])

  // Bộ đếm số vé đã chọn theo từng số (phục vụ hiển thị badge và chọn số lượng trong modal)
  const selectedCountByNumber = useMemo(() => {
    const map = new Map()
    for (const s of selected) {
      map.set(s.number, (map.get(s.number) || 0) + 1)
    }
    return map
  }, [selected])

  // Mở modal chọn số lượng cho một số
  const openModal = (n) => {
    setActiveNumber(n)
    setModalOpen(true)
  }

  // Đóng modal chọn số lượng
  const closeModal = () => {
    setModalOpen(false)
  }

  // Đặt số lượng chính xác cho một số: thay danh sách hiện có bằng các vé [1..qty]
  const setQuantityForNumber = (num, qty) => {
    setSelected(prev => {
      const others = prev.filter(s => s.number !== num)
      const entries = Array.from({ length: qty }, (_, i) => ({ number: num, index: i + 1 }))
      return [...others, ...entries]
    })
  }

  // Tạm tính: giá một vé x tổng số vé đã chọn
  // Thay đổi 10000 tại đây nếu đơn giá thay đổi
  const subtotal = selected.length * 10000

  return (
    <div className="container mx-auto px-4 py-6">
      <LotteryHeader todayText={todayText} />

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

      {/* Lưới số, kèm phù hiệu số lượng đã chọn và vé còn lại */}
      <ChooseNumber
        filtered={filtered}
        selectedCountByNumber={selectedCountByNumber}
        getRemaining={(num) => {
          const meta = metadata.get(num)
          if (!meta) return 0
          return Math.max(0, meta.total - meta.sold)
        }}
        onOpen={openModal}
      />

      {/* Thanh hành động: hiển thị tạm tính và các nút chính */}
      <SummaryBar subtotal={subtotal} onReset={() => setSelected([])} onSubmit={() => {}} />

      {/* Modal chọn số lượng: cho phép chọn từ 1..còn lại (total - sold) */}
      <LotteryModal
        open={modalOpen}
        number={activeNumber}
        meta={activeNumber ? metadata.get(activeNumber) : undefined}
        currentQty={activeNumber ? (selectedCountByNumber.get(activeNumber) || 0) : 0}
        onClose={closeModal}
        onSelectQty={(i) => setQuantityForNumber(activeNumber, i)}
      />

      <InstructionCard />
    </div>
  )
}


