import React, { useState, Fragment } from 'react'

import { Input, Button } from './styles'

const Search = ({ onSubmit }) => {
  const [search, setSearch] = useState('')
  const onChange = event => setSearch(event.target.value)

  return (
    <Fragment>
      <Input value={search} onChange={onChange}/>
      <Button onClick={() => onSubmit(search)}>
        Pesquisar
      </Button>
    </Fragment>
  )
}

const propsAreEqual = (prevProps, nextProps) => prevProps && nextProps
export default React.memo(Search, propsAreEqual)