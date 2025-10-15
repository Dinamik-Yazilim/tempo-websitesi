'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  // İlk yükleme effect'i
  useEffect(() => {
    setMounted(true)

    // LocalStorage'ı temizle ve default light tema ile başla
    localStorage.removeItem('theme')
    const initialTheme: Theme = 'light'

    setTheme(initialTheme)

    // HTML class'ını hemen uygula
    const root = document.documentElement
    root.classList.remove('dark', 'light') // Tüm tema class'larını temizle
    root.classList.add('light') // Light tema için explicit class

    console.log('Initial theme set to:', initialTheme, 'HTML classes:', root.classList.toString())
  }, [])

  // Tema değişikliği effect'i
  useEffect(() => {
    if (!mounted) return

    // localStorage'a kaydet
    localStorage.setItem('theme', theme)

    // HTML class'ını güncelle
    const root = document.documentElement
    root.classList.remove('light', 'dark') // Önce tüm tema class'larını temizle
    root.classList.add(theme) // Sonra aktif temayı ekle

    // Color scheme'i güncelle
    root.style.colorScheme = theme

    // Body'ye de explicit class ekle
    document.body.className = document.body.className.replace(/theme-\w+/g, '') + ` theme-${theme}`

    console.log('Theme changed to:', theme, 'HTML classes:', root.classList.toString())
  }, [theme, mounted])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}