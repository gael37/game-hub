import { Button, Flex, HStack, Input, InputGroup, InputLeftElement, Text, useMediaQuery } from '@chakra-ui/react'
import React, { ChangeEvent, useRef, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import useGameQueryStore from '../store'
import { VscDebugRestart } from "react-icons/vsc";
import { MdClear } from "react-icons/md";


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

  const onClear = () => {
    setInputValue('')
    setSearchText('')
  }

  const [isLargerThan768] = useMediaQuery('(min-width: 768px)')

  return (
    <>
      {isLargerThan768 ?
        <Button onClick={onClear} color='lightblue' size='md' fontWeight='normal' paddingX={3}>
          Clear
        </Button>
        :
        <></>
      }
      <InputGroup>
        <InputLeftElement>
          <BsSearch color='lightblue' />
        </InputLeftElement>
        <Input
          width='full'
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
      </InputGroup>
      {isLargerThan768 ?
        <></>
        :
        <Button onClick={onClear} color='lightblue' size='md' fontWeight='normal' paddingX={3}>
          <MdClear />
        </Button>
      }
    </>

  )
}

export default SearchInput