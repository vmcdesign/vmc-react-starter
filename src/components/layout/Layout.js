import React from 'react'
import styled from 'styled-components'
import { Header } from '../header'
import { Footer } from '../footer'

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
  color: ${props => props.theme.textColor};
  background-color: ${props => props.theme.bgColor};
  transition: all 0.2s ease;

  main {
    flex: 1;
  }
`

export const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <main>{children}</main>
      <Footer />
    </LayoutContainer>
  )
}