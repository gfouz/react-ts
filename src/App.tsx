import * as React from 'react'
import styled from 'styled-components'
import Homepage from './routes/homepage/Homepage'

function App() {
  
  return (
    <>
    <StyledApp>
        <Homepage/>
        
    </StyledApp>  
    </>
  )
}

export default App

const StyledApp = styled.div`
  body, html {
    margin: 0;
    padding: 0;
  }
`; 

