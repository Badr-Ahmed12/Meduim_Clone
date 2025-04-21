'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  User,
  BookMarked,
  FileText,
  BarChart3,
  Settings,
  SlidersHorizontal,
  LayoutDashboard,
  HelpCircle,
  Star,
  LogOut,
  X,
  Search,
  Bell,
  SquarePen,
  Menu,
  X as Close
} from 'lucide-react'

const dummySuggestions = [
  'Next.js tips',
  'Tailwind CSS guide',
  'React hooks',
  'TypeScript patterns',
  'Frontend performance'
]

export default function Navbar() {
  const [query, setQuery] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [showAccountMenu, setShowAccountMenu] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const searchRef = useRef(null)
  const accountRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        searchRef.current &&
        !searchRef.current.contains(e.target) &&
        accountRef.current &&
        !accountRef.current.contains(e.target)
      ) {
        setShowSuggestions(false)
        setShowAccountMenu(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const filtered = dummySuggestions.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <nav className="relative flex items-center justify-between px-6 py-3 bg-gray-50 shadow-sm">
      {/* Logo + Search */}
      <div className="flex items-center gap-4">
        <Link href="/" className="text-2xl font-semibold text-gray-700">
        <Image src="/logo.svg" alt="Logo" width={120} height={120} />
        </Link>
        {/* Search hidden on small */}
        <div
          ref={searchRef}
          className="relative hidden md:block"
          onFocus={() => setShowSuggestions(true)}
        >
          <input
            type="text"
            value={query}
            onChange={e => { setQuery(e.target.value); setShowSuggestions(true) }}
            placeholder="Search..."
            className="bg-gray-100 px-4 py-2 rounded-full text-sm pr-10 focus:outline-none focus:ring-2 focus:ring-gray-300 text-gray-700"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-8 top-1/2 transform -translate-y-1/2"
            >
              <X size={16} className="text-gray-400 hover:text-gray-600" />
            </button>
          )}
          <Search
            size={20}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
          />

          {showSuggestions && query && (
            <ul className="absolute mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-48 overflow-auto z-10">
              {filtered.length ? (
                filtered.map((item, idx) => (
                  <li
                    key={idx + item}
                    onClick={() => { setQuery(item); setShowSuggestions(false) }}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-700"
                  >
                    {item}
                  </li>
                ))
              ) : (
                <li className="px-4 py-2 text-gray-400 text-sm">No results</li>
              )}
            </ul>
          )}
        </div>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-4" ref={accountRef}>
        <Link href="/write" className="flex items-center gap-1 hover:text-gray-600">
          <SquarePen size={16} />
          <p className="font-medium text-sm">Write</p>
        </Link>
        <Bell size={16} className="cursor-pointer hover:text-gray-600" />
        <div
          onClick={() => setShowAccountMenu(prev => !prev)}
          className="w-7 h-7 rounded-full bg-black flex items-center justify-center overflow-hidden cursor-pointer"
        >
          <Image
            src="/profile.jpg"
            alt="Profile"
            width={20}
            height={20}
            className="rounded-full object-cover"
          />
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setMobileMenuOpen(prev => !prev)}>
          {mobileMenuOpen ? <Close /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-md p-4 z-20 text-gray-700">
          <div className="mb-4" ref={searchRef} onFocus={() => setShowSuggestions(true)}>
            <input
              type="text"
              value={query}
              onChange={e => { setQuery(e.target.value); setShowSuggestions(true) }}
              placeholder="Search..."
              className="w-full bg-gray-100 px-4 py-2 rounded-full text-sm pr-10 focus:outline-none focus:ring-2 focus:ring-gray-300 text-gray-700"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-8 top-4 transform -translate-y-1/2"
              >
                <X size={16} className="text-gray-400 hover:text-gray-600" />
              </button>
            )}
            <Search
              size={20}
              className="absolute right-2 top-4 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
            />
            {showSuggestions && query && (
              <ul className="absolute mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-48 overflow-auto z-10">
                {filtered.length ? (
                  filtered.map((item, idx) => (
                    <li
                      key={idx + item}
                      onClick={() => { setQuery(item); setShowSuggestions(false) }}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-700"
                    >
                      {item}
                    </li>
                  ))
                ) : (
                  <li className="px-4 py-2 text-gray-400 text-sm">No results</li>
                )}
              </ul>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <Link href="/write" className="flex items-center gap-2 hover:bg-gray-100 px-3 py-2 rounded">
              <SquarePen size={16} /> Write
            </Link>
            <Link href="/notifications" className="flex items-center gap-2 hover:bg-gray-100 px-3 py-2 rounded">
              <Bell size={16} /> Notifications
            </Link>
            <MenuItem href="/profile" icon={<User size={16} />} label="Profile" />
            <MenuItem href="/library" icon={<BookMarked size={16} />} label="Library" />
            <MenuItem href="/stories" icon={<FileText size={16} />} label="Stories" />
            <MenuItem href="/stats" icon={<BarChart3 size={16} />} label="Stats" />
            <MenuItem href="/settings" icon={<Settings size={16} />} label="Settings" />
            <div className="border-t border-gray-200 mt-3 pt-3">
              <div className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded cursor-pointer">
                <LogOut size={16} /> Sign out
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Account Menu */}
      {showAccountMenu && (
        <div className="absolute right-6 top-14 bg-white border border-gray-200 rounded-lg shadow-lg w-64 max-h-96 overflow-y-auto z-10 text-sm">
          <ul className="py-2">
            <MenuItem href="/profile" icon={<User className="w-4 h-4" />} label="Profile" />
            <MenuItem href="/library" icon={<BookMarked className="w-4 h-4" />} label="Library" />
            <MenuItem href="/stories" icon={<FileText className="w-4 h-4" />} label="Stories" />
            <MenuItem href="/stats" icon={<BarChart3 className="w-4 h-4" />} label="Stats" />
          </ul>
          <hr className="my-1 text-gray-200" />
          <ul className="py-2">
            <MenuItem href="/settings" icon={<Settings className="w-4 h-4" />} label="Settings" />
            <MenuItem href="/recommendations" icon={<SlidersHorizontal className="w-4 h-4" />} label="Refine recommendations" />
            <MenuItem href="/publications" icon={<LayoutDashboard className="w-4 h-4" />} label="Manage publications" />
            <MenuItem href="/help" icon={<HelpCircle className="w-4 h-4" />} label="Help" />
          </ul>
          <hr className="my-1 text-gray-200" />
          <div className="px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
            <LogOut className="w-4 h-4" /> Sign out
          </div>
          <p className="px-4 pb-3 text-xs text-gray-400">is*******@gmail.com</p>
        </div>
      )}
    </nav>
  )
}

function MenuItem({ href, icon, label }) {
  return (
    <Link href={href} className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-gray-700 rounded">
      {icon}
      <span>{label}</span>
    </Link>
  )
}
