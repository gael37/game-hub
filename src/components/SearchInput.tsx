import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React, { ChangeEvent, useRef, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import useGameQueryStore from '../store'

const SearchInput = () => {

  // const ref = useRef<HTMLInputElement>(null)
  const setSearchText = useGameQueryStore(s => s.setSearchText)
  const navigate = useNavigate()

  const [inputValue, setInputValue] = useState<string>('')

  // Handler function to update the input value
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
    setSearchText(event.target.value)
    navigate('/')
  }

  return (

    <InputGroup>
      <InputLeftElement><BsSearch /></InputLeftElement>
      <Input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
    </InputGroup>

  )
}

export default SearchInput