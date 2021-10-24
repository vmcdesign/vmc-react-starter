import React, { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { ThemeContext } from './store/ThemeStore'

const colors = {
  primary: 'hsl(3, 89%, 64%)',
  secondary: 'hsl(305, 17%, 28%)'
}

/**
 * Themes
 * 
 * TODO: Organize the theme property objects a bit better.
 */
const themes = {
  default: {
    primary: colors.primary,
    secondary: colors.secondary,
  },
  light: {
    bgColor: 'white',
    textColor: 'hsl(234, 38%, 20%)',
    borderColor: 'hsl(0, 0%, 89%)',
    navLinkColor: 'hsl(234, 38%, 20%)',
    footerBgColor: 'hsl(210, 20%, 98%)',
    footerTextColor: 'hsl(225, 10%, 60%)',
  },
  dark: {
    bgColor: 'hsl(312, 10%, 10%)',
    textColor: 'hsl(309, 14%, 90%)',
    borderColor: 'hsl(313, 9%, 19%)',
    navLinkColor: 'hsl(0, 0%, 90%)',
    footerBgColor: 'hsl(312, 10%, 9%)',
    footerTextColor: 'hsl(225, 10%, 60%)',
  }
}

// Our Theme component.  
export const Theme = ({ children }) => {
  const { theme } = useContext(ThemeContext) // Get the current theme, 'light' or 'dark'

  return (
    <>
    {/**
     * ThemeProvider gives us access to the 'theme' prop 
     * which references our themes. 
     * 
     * themes - The object created to hold our themes.
     * theme  - References individual theme.
     */}
      <ThemeProvider theme={themes[theme]}>
        {children}
      </ThemeProvider>
    </>
  )
}