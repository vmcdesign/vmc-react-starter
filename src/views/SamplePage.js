import React from 'react'
import styled from 'styled-components'

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

export const SamplePage = props => {
  const pageTitle='Sample Page Component'

  return (
    <>
      <Container>
        <Content>
          <h2>{pageTitle}</h2>
        </Content>
      </Container>
    </>
  )
}