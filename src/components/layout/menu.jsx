'use client';

import { useEffect, useState } from 'react';

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSection, setOpenSection] = useState(null); // 'tienich' | 'hotro' | 'gioithieu' | null

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setIsOpen(false);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const toggleSection = (key) => {
    setOpenSection((prev) => (prev === key ? null : key));
  };

  return (
    <div className="relative">
      {/* Toggle button (SVG) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Đóng menu' : 'Mở menu'}
        className={`p-2 rounded hover:bg-gray-100 transition ${isOpen ? 'text-purple-600' : ''}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="25" height="13" viewBox="0 0 25 13" fill="none" className="mdl-js">
          <rect width="24" height="12" transform="translate(0.659912 0.5)" fill="url(#pattern0_9_74123)"/>
          <defs>
            <pattern id="pattern0_9_74123" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlinkHref="#image0_9_74123" transform="scale(0.0178571 0.025641)"/>
            </pattern>
            <image id="image0_9_74123" width="56" height="39" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAnCAYAAABaBotQAAAAAXNSR0IArs4c6QAAAOVJREFUaEPtmbENwjAQRb/NAmxAwWCIDkETJgiZgHRQMgojsEAEmQAGID6EgggiEla6O/NdX3Hv3snylx0SP+7Nt6hz+JABbmyeWeQC8QfsJ0ULuKq3EMnMg30DSLNuAZfnaxLmeobklDagk+MLsNoAozy5FQ33+cclU5XwfpbGqsoNEgrspmUHmJy+FoiA1sXSIA0qnwBXVLmgaHs0GB2R8gLmQeWCfrfHPGha3/OlzTxoVSHzoFVz/b75krHukgZpUPkEuKLKBUXb+yOD/B+MboO+AuZBfU6GdcQ8OGxeiqq7PPgA2EdtmWNgevQAAAAASUVORK5CYII"/>
          </defs>
        </svg>
      </button>

      {/* Overlay: only for desktop drawer */}
      <div
        className={`${isOpen ? 'lg:block' : 'lg:hidden'} hidden lg:fixed lg:inset-0 lg:z-40 lg:bg-black/30`}
        onClick={() => setIsOpen(false)}
      />

      {/* Panel: desktop left drawer 400px; mobile dropdown under header (no overlay). White background, black text. */}
      <div
        className={`fixed z-50 bg-white text-gray-900 font-gilroy transition-transform duration-300 shadow-xl
          left-0 right-0 top-[88px] w-full max-h-[75vh] overflow-auto border-b border-gray-200 rounded-b-2xl
          lg:top-0 lg:left-0 lg:right-auto lg:h-full lg:w-[400px] lg:rounded-none lg:border-b-0 lg:border-r lg:border-gray-200 lg:transform
          ${isOpen ? 'block lg:translate-x-0' : 'hidden lg:-translate-x-full'}`}
      >
        {/* Desktop header area (logo) - hidden on mobile */}
        <div className="hidden lg:flex items-center gap-3 p-4 border-b border-gray-200">
          <img src="/logo.2d2d0d2c.svg" alt="Logo" className="h-8 w-auto" />
          <span className="text-sm text-gray-500">Menu</span>
        </div>

        <nav className="p-2">
          {/* Trang chủ */}
          <a href="/" className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-50 transition">
            <span className="font-gilroy-semibold">Trang chủ</span>
          </a>

          {/* Mua vé / Xổ số tự chọn */}
          <a href="/lottery" className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-50 transition">
            <span className="font-gilroy-semibold">Mua vé / Xổ số tự chọn</span>
          </a>

          {/* Kết quả xổ số (KQXS) */}
          <a href="/xskt" className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-50 transition">
            <span className="font-gilroy-semibold">Kết quả xổ số (KQXS)</span>
          </a>

          {/* Lịch sử mua vé */}
          <a href="/history" className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-50 transition">
            <span className="font-gilroy-semibold">Lịch sử mua vé</span>
          </a>

          {/* Tin tức / Thông báo / Khuyến mãi */}
          <a href="/news" className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-50 transition">
            <span className="font-gilroy-semibold">Tin tức / Khuyến mãi</span>
          </a>

          {/* Hướng dẫn / FAQ */}
          <a href="/faq" className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-50 transition">
            <span className="font-gilroy-semibold">Hướng dẫn / FAQ</span>
          </a>
        </nav>
      </div>
    </div>
  );
}


