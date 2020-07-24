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

export const Favorites = styled.button`
  align-self: flex-end;
  margin-right: 3vw;
  width: 100px;
  height: 30px;
  min-height: 30px;
  margin-bottom: 10px;
  color: white;
  background-color: #0073b1;
  border: none;
  font-weight: bold;
`