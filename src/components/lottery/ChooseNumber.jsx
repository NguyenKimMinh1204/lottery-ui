'use client'
import React from 'react'

export default function ChooseNumber({ filtered, selectedCountByNumber, onOpen }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white/70">
      <div className="max-h-80 overflow-y-auto p-4">
        <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-3">
          {filtered.map(n => {
            const count = selectedCountByNumber.get(n) || 0
            const isActive = count > 0
            return (
              <button
                key={n}
                onClick={() => onOpen(n)}
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
  )
}


