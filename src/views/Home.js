import React from 'react'
import styled from 'styled-components'
import { Button } from '../components/Button'

// Container component
const Container = styled.div`
  margin: 0 auto;
  padding: 3rem 0;
  max-width: 720px;
  width: 100%;
`

// Content component
const Content = styled.div`
  margin-bottom: 2rem;
  width: 100%;
`

export const Home = props => {
  const title = 'VMC React Starter'

  return (
    <>
      <Container>
        <Content>
          <h1 className="display" style={{ marginTop: '2rem' }}>
            Hello, {title}!
          </h1>  
          
          <p>{title} is a custom Create React App starter template for all your front-end needs.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
          voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </Content>

        <Button primary 
          className="btn" 
          style={{ marginBottom: '16px' }}>
            Primary Button
        </Button>
        <Button secondary className="btn">Secondary Button</Button>
      </Container> 
    </>
  )
}