import React, { useState } from 'react'

// First, create the context to be used throughout the application.
export const ThemeContext = React.createContext()

// Create our store, a wrapper that will provide its children access
// to the context we created above.

/**
 * ThemeStore()
 * 
 * Create our store, a wrapper that will provide its children access
 * to the context we created above.  Stores the state of our theme in 
 * the application. 
 */
export const ThemeStore = ({ children }) => {
  const initialState = 'light' // Set light theme by default

  const [theme, setTheme] = useState(initialState) // Store our initial state
  
  const switchTheme = theme => setTheme(theme) // Our theme switcher

  return (
    <ThemeContext.Provider value={{ switchTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  )
}