import { HStack, Switch, Text, useColorMode, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import { RiMoonClearFill } from "react-icons/ri";

const ColorModeSwitch = () => {

  const { toggleColorMode, colorMode } = useColorMode()

  const [isLargerThan768] = useMediaQuery('(min-width: 768px)')


  return (
    <HStack>
      <Switch colorScheme='blue' isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
      < Text whiteSpace='nowrap'>
        {isLargerThan768 ? 'Dark Mode' : <RiMoonClearFill size={22} color='lightblue' />}
      </Text>
    </HStack >
  )
}

export default ColorModeSwitch