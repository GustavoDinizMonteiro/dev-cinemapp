import styled, { css } from 'styled-components'

const text = css`
  color: white;
  margin: 0;
  margin-bottom: 5px;
  text-align: center;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  
  padding: 10px 5px 50px 5px;
  background-color: black;
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  box-sizing: border-box;
`

export const Title = styled.p`
  ${text}
  font-size: 2rem;
  font-weight: bold;
`

export const Label = styled.p`
  ${text}
`