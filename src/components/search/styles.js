import styled, { css } from 'styled-components'

const width = '90vw'
const size = css`
  width: ${width};
  height: 40px;
  min-height: 40px;
`

export const Input = styled.input`
  ${size}
  width: calc(${width} - 20px);
  border-radius: 20px;
  margin-bottom: 5px;
  font-weight: bold;
  padding: 0px 10px;
`

export const Button = styled.button`
  ${size}
  background-color: #0073b1;
  color: white;
  border: none;
  font-size: 16px;
  letter-spacing: 2px;
  font-weight: bold;
  margin-bottom: 15px;
`