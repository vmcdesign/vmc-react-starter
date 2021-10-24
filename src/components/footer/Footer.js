import React from 'react'
import styled from 'styled-components'

const SiteFooter = styled.footer`
  padding: 1rem 0;
  width: 100%;
  color: ${props => props.theme.footerTextColor};
  background-color: ${props => props.theme.footerBgColor};
  transition: all 0.2s ease;
`

const Container = styled.div`
  padding: 0 3rem;
`

export const Footer = () => {
  const date = new Date()
  const currentYear = date.getFullYear()

  return (
    <SiteFooter>
      <Container>
        <p style={{ padding: 0 }}>&copy; {currentYear} | Made with &hearts; by Vanessa Coles (VMC Design) | License: MIT</p>
      </Container>
    </SiteFooter>
  )
}