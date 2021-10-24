import React from 'react'
import styled from 'styled-components'
import { NavContainer } from '../nav-container/NavContainer'

const SiteHeader = styled.header`
  width: 100%;
  background-color: ${props => props.theme.bgColor};
  border-bottom: 1px solid;
  border-color: ${props => props.theme.borderColor};
`
export const Header = () => {

  return (
    <SiteHeader role="banner">
      <NavContainer light />
    </SiteHeader>
  )
}